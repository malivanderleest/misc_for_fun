from ask_sdk_core.skill_builder import SkillBuilder
from ask_sdk_core.dispatch_components import AbstractRequestHandler
from ask_sdk_core.dispatch_components import AbstractExceptionHandler
from ask_sdk_core.utils import is_request_type, is_intent_name
from ask_sdk_core.handler_input import HandlerInput

from ask_sdk_model.ui import SimpleCard
from ask_sdk_model import Response


def set_prompts(handler_input, prompt, reprompt, end_flag):
    """
    set the prompts and end_flag of the handler_input.response
    Input:
        handler_input: class, the poiter of the handler_input class
        prompt: str, the prompt string of the response
        reprompt: str,
        end_flag: bool, the flag marking whether the session is ending
    """
    
    handler_input.response_builder.speak(prompt).set_card(
            SimpleCard("Hello World", prompt)).set_should_end_session(
            end_flag).ask(reprompt)
            
    return handler_input

def get_prompts_from_outputs(handler_input):
    r = handler_input.response_builder.response.to_dict()
    return r
    


class step:
    prompt=""
    reprompt=""
    no_message=""
    default_message='Thanks'
    
    def __init__(self, parent):
        self.parent = parent
            
    def get_prompts(self):
        set_prompts(self.parent.handler_input, self.prompt, self.reprompt, False)

class GREETING:
    short_name = "GREETING"
    
    def __init__(self, handler_input, ans=1):
        self.handler_input = handler_input
        self.attr = handler_input.attributes_manager.session_attributes
        self.ans = ans
        
    
    def step_forward(self, step = None):
        if step is None:
            self.attr["step"] += 1
        else:
            self.attr["step"] = step

    def handle(self):
        step = self.attr["step"]
        print(self.short_name," handling step:", step)
        if step == -1:
            self.step0(self).get_prompts()
            self.step_forward()
        elif step == 0:
            self.step0(self).answer(self.ans)
        elif step == 1:
            self.step1(self).answer(self.ans)
        elif step == 2:
            self.step2(self).answer(self.ans)
        elif step == 3:
            self.step3(self).answer(self.ans)
        else:
            set_prompts(self.handler_input, "Thanks", "Thanks", True)

        r  = get_prompts_from_outputs(self.handler_input)
        print("result", r)
        return self.handler_input

    class step0(step):
        """
        Greeting/welcome message
        """
        prompt="Hi {}, How are you feeling now? Is everything OK with you?"
        reprompt="Do you feel happy or relexed now?"
        
        ##def __init__(self, handler_input, ans=1):
        ##self.handler_input = handler_input
        ##self.attr = handler_input.attributes_manager.session_attributes
        ##self.ans = ans
        
        def get_prompts(self):
            user_name = self.parent.attr["name"]
            self.prompt = self.prompt.format(user_name)
            set_prompts(self.parent.handler_input, self.prompt, self.reprompt, False)
            

        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward()
                GREETING.step1(self.parent).get_prompts()
            else:
                self.parent.step_forward()
                GREETING.step1(self.parent).get_prompts()
            

    class step1(step):
        """
        Happy response
        """
        prompt=("Ok, let’s try a breathing exercise to help you relax. "
        "Find a comfortable position. "
        "<break time='5s'/>"
        "Are you ready to continue?"
        )
        no_prompt=("Ok, do you need more time?")
        yes_prompt=( "<break time='5s'/>"
            "Are you ready to continue? ")
        quit_promt=("Ok, let’s do this another time. Good bye! "
        "You can say reschedule to reschedule another time.")
        
        repromt="Would you like some breath exercises with soothing music？"
        


        def answer(self, ans=1): # Step forward to next stage
            if "count" not in self.parent.attr or self.parent.attr["count"]==-1: # counter for current question
                self.parent.attr["count"] = 0
            if ans==1:
                if self.parent.attr["count"] == 0:
                    print("ENDDDDDD")
                    self.parent.attr["current_stage"] = BreathExercise.short_name
                    self.parent.attr["step"] = -1
                    set_prompts(self.parent.handler_input, self.prompt, self.reprompt, True)
                else: # confirm question
                    self.parent.attr["count"] = 0
                    set_prompts(self.parent.handler_input, self.yes_prompt, self.yes_prompt, True)
                    
            else:
                self.parent.attr["count"] += 1
                if self.parent.attr["count"]<=2:
                    set_prompts(self.parent.handler_input, self.no_prompt, self.no_prompt, True)
                else:
                    set_prompts(self.parent.handler_input, self.quit_promt, "", True)

                
                # self.parent.attr["current_stage"] = RESCHEDULE.short_name
                # self.parent.attr["step"] = -1
                # return RESCHEDULE(self.parent.handler_input).handle()
            
            
    class step2(step):
        """
        Sad response
        """

        prompt=("That’s ok. I can help you work on that. Maybe a short breathing exercise would help. "
        "Would you like to a short breathing exercise?")
        repromt="Would you like to a short breathing exercise?"


        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.attr["current_stage"] = BreathExercise.short_name
                self.parent.step_forward(-1)
                BreathExercise(self.parent.handler_input).handle()
            else:
                self.parent.attr["current_stage"] = RESCHEDULE.short_name
                self.parent.attr["step"] = -1
                RESCHEDULE(self.parent.handler_input).handle()
    


class BreathExercise:
    short_name = "BE"
    
    def __init__(self, handler_input, ans=1):
        """
        ans == 1 for YesIntent. After YesIntent, it will step forward to next step
        ans == 0 for NoIntent. The NoIntent will be handled in current step(without step forward)
        """
        self.handler_input = handler_input
        self.attr = handler_input.attributes_manager.session_attributes
        self.ans = ans
        
        # Write log to session_att
    
    def step_forward(self, step = None):
        if step is None:
            self.attr["step"] += 1
        else:
            self.attr["step"] = step

    def handle(self):
        step = self.attr["step"]
        print(self.short_name," handling step:", step)
        if step == -1:
            self.step0(self).get_prompts()
            self.step_forward()
        elif step == 0:
            self.step0(self).answer(self.ans)
        elif step == 1:
            self.step1(self).answer(self.ans)
        elif step == 2:
            self.step2(self).answer(self.ans)
        elif step == 3:
           self.step3(self).answer(self.ans)
        elif step == 4:
            self.step4(self).answer(self.ans)
        elif step == 5:
            self.step5(self).answer(self.ans)
        else:
            pass
        
        r = get_prompts_from_outputs(self.handler_input)
        print("result", r)
        return self.handler_input


    class step0(step):
        """
        Ask for sitting down
        """
        
        prompt=("Great! Relax the muscles of your face, "
        "<break time='1s'/>"
        "your jaw, "
        "<break time='1s'/>"
        "and your shoulders. "
        "<break time='1s'/>"
        "Begin to breathe in and out through your nose ."
        "<break time='1s'/>"
        "Notice your breath. "
        "<break time='1s'/>"
        "Notice how it feels to breathe in. "
        "<break time='3s'/>"
        "Notice how it feels to breathe out. "
        "<break time='3s'/>"
        "Good job! Inhale, breathing in through your nose and down into your belly. "
        "Exhale, breathing up and out your nose. "
        "<break time='1s'/>"
        "Continue to breathe slowly, in and down, "
        "<break time='0.5s'/>"
        "up and out. "
        "<break time='5s'/>"
        "That’s great. Did you find a comfortable rhythm of breath? ")
        
        reprompt = "Did you find a comfortable rhythm of breath? "
        
        
        def get_prompts(self):
            return self.prompt, self.reprompt
        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward(1)
                return BreathExercise.step1(self.parent).get_prompts()
            else:
                self.parent.step_forward(2)
                return BreathExercise.step2(self.parent).get_prompts()
            

    class step1(step):
        """
        Ask for feeling hip
        """
        prompt=("Excellent! Continue to breathe in this way. "
        "If your attention wanders away to something else, that’s okay. "
        "Notice it, then bring your attention back to your breath. "
        "In and down <break time='0.5s'/>, one<break time='1s'/> two<break time='1s'/> three "
        "<break time='2s'/>  up and out, one<break time='1s'/> two<break time='1s'/> three <break time='2s'/>.  "
        "Again, in and down, <break time='2s'/> up and out <break time='2s'/>. "
        "Good! Now keep going for a few moments, "
        "<break time='1s'/>"
        "- pay attention to your breath. "
        "Relax your breath. Notice how you feel. "
        "<break time='1s'/>"
        "Now, would you like to continue breathing for another minute?"
        )

        repromt=("would you like to continue breathing for another minute?")
        
        def get_prompts(self):
            return self.prompt, self.repromt

        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward(3)
                return BreathExercise.step3(self.parent).get_prompts()
            else:
                self.parent.step_forward(5)
                return BreathExercise.step5(self.parent).get_prompts()
            
            
    class step2(step):
        """
        Relax and play audio, Do you notice your breath? 
        """

        prompt=("Ok, no problem, let’s try this. Put your hands on your belly. "
        "Breathe in and out through your nose. "
        "Don’t worry about your breath, "
        "there’s no right or wrong, good or bad. "
        "Just breathe and notice. Bring your attention to your hands on your belly. "
        "Breathe in, notice your hands, breathe out, notice your hands. "
        "Breathe like this for a few more moments, observing your breath. "
        "<break time='4s'/>"
        "Great! Continue to breathe in this way. "
        "Remember, if your attention wanders away to something else, that’s okay."
        "Notice it, then bring your attention back to your breath. "
        "In and down <break time='0.5s'/>, one<break time='1s'/> two<break time='1s'/> three "
        "<break time='2s'/>  up and out, one<break time='1s'/> two<break time='1s'/> three <break time='2s'/>.  "
        "Again, in and down, <break time='3s'/> up and out <break time='3s'/>. "
        "Now, would you like to continue breathing for another minute?"
        )

        def get_prompts(self):
            return self.prompt, self.prompt

        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward(3)
                return BreathExercise.step3(self.parent).get_prompts()
            else:
                self.parent.step_forward(5)
                return BreathExercise.step5(self.parent).get_prompts()
    
    class step3(step):

        prompt=("Great! Would you like to continue with music? "
                )
        reprompt="Would you like to exercise more with music? "
        
        yes_prompt = ("Okay, I will play music for a minute. "
        "<audio src='https://alexa-cpsl-mindfulness.s3.amazonaws.com/soft_60s.mp3'/> ")
        no_prompt = ("Ok, I will put a timer for a minute. Enjoy your silent one minute. "
        "<audio src='https://alexa-cpsl-mindfulness.s3.amazonaws.com/silent_60s.mp3'/> ")
        
        end_prompt = ("Slowly open your eyes. You did a great job being mindful and aware of your breath. "
        "Let’s do this again later today")
        
        def get_prompts(self):
            return self.prompt, self.prompt

        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward()
                return self.yes_prompt+self.end_prompt, ""
            else:
                self.parent.step_forward()
                return self.no_prompt+self.end_prompt, ""
    
    class step4(step):

        prompt=("Goodbye!"
                )
        def get_prompts(self):
            return self.prompt, self.prompt

        def answer(self, ans=1): # Step forward to next stage
            return self.prompt, self.prompt
    
    class step5(step):

        prompt=(
                "You did a great job being mindful and aware. Let’s do this again later today. Does that sound good? "
                )
        def get_prompts(self):
            return self.prompt, self.prompt

        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                self.parent.step_forward()
                return self.default_message, self.default_message
            else:
                return self.default_message, self.default_message

    


                
                
                
class RESCHEDULE:
    short_name = "RES"
    
    def __init__(self, handler_input, ans=1):
        self.handler_input = handler_input
        self.attr = handler_input.attributes_manager.session_attributes
        self.ans = ans
        
    
    def step_forward(self, step = None):
        if step is None:
            self.attr["step"] += 1
        else:
            self.attr["step"] = step

    def handle(self):
        step = self.attr["step"]
        print(self.short_name," handling step:", step)
        if step == -1:
            self.step0(self).get_prompts()
            self.step_forward()
        elif step == 0:
            self.step0(self).answer(self.ans)
        elif step == 1:
            self.step1(self).answer(self.ans)
        elif step == 2:
            self.step2(self).answer(self.ans)
        elif step == 3:
            self.step3(self).answer(self.ans)
        else:
            pass
        print("result", r)  #Question for Ruixuan: what is r?
        return self.handler_input
    
    class step0(step):
        """
        Reschedule 
        """
        repromt="OK, You can say reschedule to reschedule another time. Or say end to quit"
        repromt="OK, You can say reschedule to reschedule another time. Or say end to quit"
        no_message = "Thanks"
        
        def answer(self, ans=1): # Step forward to next stage
            if ans==1:
                
                return self.no_message, self.no_message
            else:
                return self.no_message, self.no_message