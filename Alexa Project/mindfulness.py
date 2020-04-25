# -*- coding: utf-8 -*-

# This is a simple Hello World Alexa Skill, built using
# the implementation of handler classes approach in skill builder.
import logging
import traceback
import data, module
from logger import log_status

from module import BreathExercise, GREETING, RESCHEDULE

import datetime
from datetime import timezone, timedelta

from ask_sdk_core.skill_builder import SkillBuilder, CustomSkillBuilder
from ask_sdk_core.dispatch_components import AbstractRequestHandler
from ask_sdk_core.dispatch_components import AbstractExceptionHandler
from ask_sdk_core.utils import is_request_type, is_intent_name
from ask_sdk_core.handler_input import HandlerInput
from ask_sdk_core.api_client import DefaultApiClient
# from ask_sdk.standard import StandardSkillBuilder

from ask_sdk_model.ui import SimpleCard, AskForPermissionsConsentCard
from ask_sdk_model import Response
from ask_sdk_model.intent_confirmation_status import IntentConfirmationStatus

from ask_sdk_model.services import ServiceException
from ask_sdk_model.services.reminder_management import Trigger, TriggerType, AlertInfo, SpokenInfo, SpokenText, \
    PushNotification, PushNotificationStatus, ReminderRequest, recurrence_freq, recurrence


# sb = SkillBuilder()
sb = CustomSkillBuilder(api_client=DefaultApiClient())
# sb = StandardSkillBuilder(table_name="CPSL-mindfulness", auto_create_table=True)


logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

TIME_ZONE_ID = 'America/Chicago'
REQUIRED_PERMISSIONS = ["alexa::alerts:reminders:skill:readwrite"]
tz = timezone(timedelta(hours=-5))
time_format = "%Y-%m-%dT%H:%M:%S.000"



class LaunchRequestHandler(AbstractRequestHandler):
    """Handler for Skill Launch."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_request_type("LaunchRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speech_text = data.WELCOME_MESSAGE
        attr = handler_input.attributes_manager.session_attributes
        # p_attr = handler_input.attributes_manager.persistent_attributes
        
        # Request Permission
        request_envelope = handler_input.request_envelope
        permissions = request_envelope.context.system.user.permissions
        reminder_service = handler_input.service_client_factory.get_reminder_management_service()
    
        # if not (permissions and permissions.consent_token):
        #     print("user hasn't granted reminder permissions")
        #     return handler_input.response_builder.speak("Please give permissions to set reminders using the alexa app.") \
        #         .set_card(AskForPermissionsConsentCard(permissions=REQUIRED_PERMISSIONS)) \
        #         .response
        
        
        # # Set every day reminder
        # now = datetime.datetime.now(tz)
        # print(now)
        # notification_time = now.replace(hour=8, minute=0, second=0) + timedelta(days=1)
        # notification_time = notification_time.strftime(time_format)
        # print(notification_time)
        # re = recurrence.Recurrence(recurrence_freq.RecurrenceFreq.DAILY)
        # trigger = Trigger(TriggerType.SCHEDULED_ABSOLUTE, notification_time, time_zone_id=TIME_ZONE_ID, recurrence=re)
        # text = SpokenText(locale='en-US', ssml="Would you like some mindfulness exercise? Please say open happy day.",
        #         text='Would you like some mindfulness exercise? Please say open happy day.')
        # alert_info = AlertInfo(SpokenInfo([text]))
        # push_notification = PushNotification(PushNotificationStatus.ENABLED)
        # reminder_request = ReminderRequest(now.strftime(time_format), trigger, alert_info, push_notification)
        # 
        # try:
        #     rs = reminder_service.get_reminders()
        #     print("existing reminders:",rs)
        # except ServiceException as e:
        #     # see: https://developer.amazon.com/docs/smapi/alexa-reminders-api-reference.html#error-messages
        #     print("Error in get_reminders")
        #     print(e)
        #     traceback.print_exc()
        # try:
        #     reminder_response = reminder_service.create_reminder(reminder_request)
        # except ServiceException as e:
        #     # see: https://developer.amazon.com/docs/smapi/alexa-reminders-api-reference.html#error-messages
        #     print("Error in creating reminder while launching")
        #     print(e)
        #     traceback.print_exc()
        
        
        if not attr:
            # First YesIntent route to "BREATH_EX"
            attr['current_stage'] = "GREETING"
            attr['step'] = -1  # This is for next-level route
        
        try:
            user_preferences_client = handler_input.service_client_factory.get_ups_service()
            user_name = user_preferences_client.get_profile_name()
        except:
            user_name = "friend"
            print("Cannot get user_name")
            
        attr['name'] = user_name
        handler_input = GREETING(handler_input).handle()

            
        log_status(handler_input, "Launch")
        return handler_input.response_builder.response


class E_EggIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("E_eggIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speech_text = data.E_EGG

        handler_input.response_builder.speak(speech_text).set_card(
            SimpleCard("Hello World", speech_text)).set_should_end_session(
            True)
        return handler_input.response_builder.response


class YesIntentHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("YesIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        print("YesIntent")
        """Handler for Skill Launch.
        Get the attributes
        """
        attr = handler_input.attributes_manager.session_attributes
        log_status(handler_input, "Yes")
        
        print("YesIntent handled\n", str(attr))
        if attr['current_stage'] == "GREETING":
            handler_input = GREETING(handler_input, ans=1).handle()
            
        
        elif attr['current_stage'] == BreathExercise.short_name:
            handler_input = BreathExercise(handler_input, ans=1).handle()
            
        elif attr['current_stage'] == RESCHEDULE.short_name:
            handler_input = RESCHEDULE(handler_input, ans=1).handle()
            
            
            
            
        
        # handler_input.response_builder.speak(prompt).set_card(
        #     SimpleCard("Hello World", prompt)).set_should_end_session(
        #     True).ask(reprompt)
        return handler_input.response_builder.response


class NoIntentHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("NoIntent")(handler_input)

    def handle(self, handler_input):
        """Handler for Skill Launch.
        Get the persistence attributes, to figure out the game state.
        """
        log_status(handler_input, "No")
        # type: (HandlerInput) -> Response
        attr = handler_input.attributes_manager.session_attributes
        print("NoIntent handled\n", str(attr))
        if attr['current_stage'] == "GREETING":
           handler_input = GREETING(handler_input, ans=0).handle()
            
        
        elif attr['current_stage'] ==  BreathExercise.short_name:
            handler_input = BreathExercise(handler_input, ans=0).handle()
            
            
        elif attr['current_stage'] == RESCHEDULE.short_name:
            handler_input = RESCHEDULE(handler_input, ans=0).handle()
            
        # handler_input.response_builder.speak(prompt).set_card(
        #     SimpleCard("Hello World", prompt)).set_should_end_session(
        #     True).ask(reprompt)
        return handler_input.response_builder.response


class RescheduleIntentHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("RescheduleIntent")(handler_input)

    def handle(self, handler_input):
        """Handler for Skill Launch.
        Get the persistence attributes, to figure out the game state.
        """
        
        current_intent = handler_input.request_envelope.request.intent
        log_status(handler_input, str(current_intent))
        attr = handler_input.attributes_manager.session_attributes
        # print(current_intent)
        # print(current_intent.confirmation_status)
        if current_intent.confirmation_status == IntentConfirmationStatus.DENIED:
            attr["current_stage"] = RESCHEDULE.short_name
            attr["step"] = -1
            handler_input = RESCHEDULE(handler_input, ans=0).handle()
            handler_input.response_builder.speak(prompt).set_card(
                SimpleCard("Hello World", prompt)).set_should_end_session(
                True).ask(reprompt)
            return handler_input.response_builder.response
        if current_intent.confirmation_status == IntentConfirmationStatus.CONFIRMED:
            
            prompt = "Thanks, we will reschedule your time"
            handler_input.response_builder.speak(prompt).set_card(
                SimpleCard("Hello World", prompt)).set_should_end_session(
                True)
            return handler_input.response_builder.response


class HelpIntentHandler(AbstractRequestHandler):
    """Handler for Help Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("AMAZON.HelpIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speech_text = "You can say breath exercise to do some mindfulness exercise, reschedule to choose another time to remind!!"

        handler_input.response_builder.speak(speech_text).ask(
            speech_text).set_card(SimpleCard(
                "Hello World", speech_text))
        return handler_input.response_builder.response


class CancelOrStopIntentHandler(AbstractRequestHandler):
    """Single handler for Cancel and Stop Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return (is_intent_name("AMAZON.CancelIntent")(handler_input) or
                is_intent_name("AMAZON.StopIntent")(handler_input))

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speech_text = "Goodbye!"

        handler_input.response_builder.speak(speech_text).set_card(
            SimpleCard("Hello World", speech_text))
        return handler_input.response_builder.response


class FallbackIntentHandler(AbstractRequestHandler):
    """AMAZON.FallbackIntent is only available in en-US locale.
    This handler will not be triggered except in that locale,
    so it is safe to deploy on any locale.
    """
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("AMAZON.FallbackIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speech_text = (
            "The cool day skill can't help you with that.  "
            "You can say breath exercise to do some mindfulness exercise. Say reschedule to choose another time to remind!!")
        reprompt = "You can say breath exercise to do some mindfulness exercise. Say reschedule to choose another time to remind!!"
        handler_input.response_builder.speak(speech_text).ask(reprompt)
        return handler_input.response_builder.response


class SessionEndedRequestHandler(AbstractRequestHandler):
    """Handler for Session End."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_request_type("SessionEndedRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        return handler_input.response_builder.response


class CatchAllExceptionHandler(AbstractExceptionHandler):
    """Catch all exception handler, log exception and
    respond with custom message.
    """
    def can_handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> bool
        return True

    def handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> Response
        logger.error(exception, exc_info=True)

        speech = "Sorry, there was some problem. Please try again!!"
        handler_input.response_builder.speak(speech).ask(speech)

        return handler_input.response_builder.response


sb.add_request_handler(RescheduleIntentHandler())
sb.add_request_handler(LaunchRequestHandler())
sb.add_request_handler(YesIntentHandler())
sb.add_request_handler(NoIntentHandler())
sb.add_request_handler(E_EggIntentHandler())
sb.add_request_handler(HelpIntentHandler())
sb.add_request_handler(CancelOrStopIntentHandler())
sb.add_request_handler(FallbackIntentHandler())
sb.add_request_handler(SessionEndedRequestHandler())

sb.add_exception_handler(CatchAllExceptionHandler())

handler = sb.lambda_handler()
