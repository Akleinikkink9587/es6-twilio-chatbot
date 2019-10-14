const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    OUTSIDE_ALLEY: Symbol("outside_alley"),
    ENTER_ALLEY: Symbol("enter_alley"),
    APPROACH_KID: Symbol("approach_kid"),
    LOST: Symbol("lost"),
    APPROACH_KID_LOST: Symbol("approach_kid_lost"),
    CHASE: Symbol("chase"),
    FIGHT: Symbol("fight"),
    ENTER_HOUSE: Symbol("enter_house"),
    COMFORT_KID: Symbol("comfort_kid"),
    COMFORT_HUG: Symbol("comfort_hug"),
    COMFORT_ASK_TALK: Symbol("comfort_ask_talk"),
    COMFORT_CALM: Symbol("comfort_calm"),
    COMFORT_TALK: Symbol("comfort_talk"),
    TALK_ALLEY_FIGHT: Symbol("talk_alley_fight"),
    TALK_STORE: Symbol("talk_store"),
    TALK_HELP: Symbol("talk_help"),
    TALK_SCOLD: Symbol("talk_scold"),
    HELP_PAINTING: Symbol("help_painting"),
    HELP_STORE: Symbol("help_painting"),
    HELP_ASK: Symbol("help_ask"),
    DONE: Symbol("done")
});

export default class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case GameState.WELCOMING:
                sReply = "You were walking around downtown, just before dusk, and you see kids fighting over a wallet in an alley. The kids see you and stop. Do you stop or continue on your way?";
                this.stateCur = GameState.OUTSIDE_ALLEY;
                break;
            case GameState.OUTSIDE_ALLEY:
                if (sInput.toLowerCase().match("stop")) {
                    sReply = "All of the kids but one run leaving the wallet to the scrawniest kid you have ever seen. Do you enter the alley or continue on your way?";
                    this.stateCur = GameState.ENTER_ALLEY
                } else {
                    sReply = "All of the kids but one run leaving the wallet to the scrawniest kid you have ever seen. The kid leaves the alley and looks at you. Do you approach the kid or continue on your way?";
                    this.stateCur = GameState.APPROACH_KID;
                }
                break;
            case GameState.ENTER_ALLEY:
                if (sInput.toLowerCase().match("enter")) {
                    sReply = "You enter the alley and as you start to enter the alley the kids looks like he is going to run. Do you approach the kid or exit the alley and continue on your way?"
                    this.stateCur = GameState.APPROACH_KID;
                } else {
                    sReply = "You decided to continue on your way. While walking you missed your corner and you are now lost. Do you call for help or continue walking?";
                    this.stateCur = GameState.LOST;
                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("approach")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.CHASE;
                } else {
                    sReply = "You decided to continue on your way. While walking you missed your corner and you are now lost. Do you call for help or continue walking?";
                    this.stateCur = GameState.LOST;
                }
                break;
            case GameState.LOST:
                if (sInput.toLowerCase().match("call")) {
                    sReply = "You decided to call for help. You took your phone our of your pocket and you have no signal. You see the same scrawny kid from the alley in the distance. Do you approach the kid or keep wandering till you find your way?";
                    this.stateCur = GameState.APPROACH_KID_LOST;
                } else {
                    sReply = "You decided to keep wandering. After 30 minutes of wandering you still have no idea where you are. Do you call for help or continue wondering?";
                    this.stateCur = GameState.LOST;
                }
                break;
            case GameState.APPROACH_KID_LOST:
                if (sInput.toLowerCase().match("approach")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue wondering?";
                    this.stateCur = GameState.CHASE;
                } else {
                    sReply = "You decide to continue wondering. After 30 minutes you still have no idea where you are. Do you try and call for help again or continue wondering?";
                    this.stateCur = GameState.LOST;
                }
                break;
            case GameState.CHASE:
                if (sInput.toLowerCase().match("chase")) {
                    sReply = "You decide to chase the kid and after a long chase he enters an old decrepit building. Do you enter the building or turn back?";
                    this.stateCur = GameState.ENTER_HOUSE;
                } else {
                    sReply = "You decided to continue walking but the other kids from the alley come up behind you with weapons. Do you fight or run and chase after the kid?";
                    this.stateCur = GameState.FIGHT;
                }
                break;
            case GameState.FIGHT:
                if (sInput.toLowerCase().match("fight")) {
                    sReply = "You decide to try and fight off the kids to no avail and have to run. You lose the other kids from the alley and then watch the scrawny kid enter an old decrepit building. Do you enter the building or turn back?";
                    this.stateCur = GameState.ENTER_HOUSE;
                } else {
                    sReply = "You decide to chase after the scrawny kid. You lose the other kids from the alley and then watch the scrawny kid enter an old decrepit building. Do you enter the building or turn back?";
                    this.stateCur = GameState.ENTER_HOUSE;
                }
                break;
            case GameState.ENTER_HOUSE:
                if (sInput.toLowerCase().match("enter")) {
                    sReply = "You enter the decrepit house and see the kid crying. Do you comfort the kid or search the house?";
                    this.stateCur = GameState.COMFORT_KID;
                } else {
                    sReply = "You deicide to turn back but as you get look behind you the other kids from the alley are searching for you with weapons in the distance. You have to enter the house to escape from the kids. You see the scrawny kid crying. Do you comfort the kid or search the house? ";
                    this.stateCur = GameState.COMFORT_KID;
                }
                break;
            case GameState.COMFORT_KID:
                if (sInput.toLowerCase().match("comfort")) {
                    sReply = "You decide to try and comfort the kid. As you are comforting the kid he decides try and give you a hug. Do you push the kid away or let him give you a hug?";
                    this.stateCur = GameState.COMFORT_HUG;
                } else {
                    sReply = "You decide to search the house. After 15 minutes of searching you don't find anything useful. Do you comfort the kid or continue to search the house?";
                    this.stateCur = GameState.COMFORT_KID;
                }
                break;
            case GameState.COMFORT_HUG:
                if (sInput.toLowerCase().match("push")) {
                    sReply = "You decided to push the kid away. The kid starts crying even more and distances himself from you. Do you comfort the kid or search the house?";
                    this.stateCur = GameState.COMFORT_KID;

                } else {
                    sReply = "As you hug the kid he stops crying and appears like he is hesitating to tell you something. Do you try and convince him to talk or continue to let him calm down in your arms?";
                    this.stateCur = GameState.COMFORT_ASK_TALK;
                }
                break;
            case GameState.COMFORT_ASK_TALK:
                if (sInput.toLowerCase().match("talk")) {
                    sReply = "You try and convince the kid to talk be it doesn't appear like he is going to talk. Do you try again or let him calm down more?";
                    this.stateCur = GameState.COMFORT_CALM;
                } else {
                    sReply = "The kid appears to be a lot more calm after 5 minutes. Do you have him calm down more or try and convince him to talk?";
                    this.stateCur = GameState.COMFORT_TALK;
                }
                break;
            case GameState.COMFORT_CALM: 
                if (sInput.toLowerCase().match("again")) {
                    sReply = "You try convince the kid to talk again but he still doesn't want to talk. Do you try again or let him calm down more?";
                    this.stateCur = GameState.COMFORT_CALM;
                } else {
                    sReply = "You decided to let the kid calm down. After 5 minutes it appears like he is ready to talk. Do you have him calm down more or try and convince him to talk?";
                    this.stateCur = GameState.COMFORT_TALK;
                }
                break;
            case GameState.COMFORT_TALK:
                if (sInput.toLowerCase().match("talk")) {
                    sReply = "The kid decides to talk and tells you that the wallet is his mothers. Do you ask about why he was fighting the kids in the alley?";
                    this.stateCur = GameState.TALK_ALLEY_FIGHT;
                } else {
                    sReply = "The kid appears to be a lot more calm after 5 minutes. Do you have him calm down more or try and convince him to talk?";
                    this.stateCur = GameState.COMFORT_TALK;
                }
                break;
            case GameState.TALK_ALLEY_FIGHT:
                if (sInput.toLowerCase().match("ask") || sInput.toLowerCase().match("yes")) {
                    sReply = "The kids tells you that on the way to a corner store he ran into the kids which saw the wallet. They wanted money for candy so they attacked him. Do you ask him about the store?";
                    this.stateCur = GameState.TALK_STORE;
                } else {
                    sReply = "The kid starts mentioning something about a corner store. Do you ask him about the store?";
                    this.stateCur = GameState.TALK_STORE;
                }
                break;
            case GameState.TALK_STORE:
                if (sInput.toLowerCase().match("ask") || sInput.toLowerCase().match("yes")) {
                    sReply = "The kid tells you that he was supposed to pickup cheese for dinner. Do you ask him about dinner or offer to help him?";
                    this.stateCur = GameState.TALK_HELP;
                } else {
                    sReply = "The kid keeps muttering about a corner store. Do you ask him about the store?";
                    this.stateCur = GameState.TALK_STORE;
                }
                break;
            case GameState.TALK_HELP:
                if (sInput.toLowerCase().match("ask")) {
                    sReply = "The kid tells you that his mom is cooking nachos for dinner and ran out of cheese. She asked him to get it because she was in the middle of cooking the beef. Do offer to help or scold his mother?";
                    this.stateCur = GameState.TALK_SCOLD;
                } else {
                    sReply = "The kid starts talking about how his mother said he needs to get cheese and that she will be disappointed if he returns home without it. Do offer to help or scold his mother?";
                    this.stateCur = GameState.TALK_SCOLD;
                }
                break;
            case GameState.TALK_SCOLD:
                if (sInput.toLowerCase().match("help")) {
                    sReply = "You decide to help the kid. He leads you to the backdoor of the house, where the lock is rusted closed, and shows you a hidden exit where the wall has crumbled apart. As you exit the building you see 'BEWARE THE WITCH' painted on the wall. Do you ask the kid about the painting or just continue following him?";
                    this.stateCur = GameState.HELP_PAINTING;
                } else {
                    sReply = "The kid freaks out what you scold him mother and pushes you away after punching you a few times. He then starts crying again and you have no idea what to do. Do you try to comfort the kid again or search the house? ";
                    this.stateCur = GameState.COMFORT_KID;
                }
                break;
            case GameState.HELP_PAINTING:
                if (sInput.toLowerCase().match("ask")) {
                    sReply = "When you mention the painting the kid appears scared and tells you that it is just a joke. The kid then leads you to an old rundown corner store. Do you enter the store with the kid or wait outside?";
                    this.stateCur = GameState.HELP_STORE;
                } else {
                    sReply = "You decided to just keep following the kid. Eventually you reach an old rundown corner store. Do you enter the store with the kid or wait outside?";
                    this.stateCur = GameState.HELP_STORE;
                }
                break;
            case GameState.HELP_STORE:
                if (sInput.toLowerCase().match("enter")) {
                    sReply = "You enter the store with the kid and the kid grabs some cheese from the fridge. He then brings it to the cashier who rings it through. The cashier tells you to be careful as you exit the store. The kid then starts walking home. Do you ask the kid about whats going on or just follow him as don't know where you are?";
                    this.stateCur = GameState.HELP_ASK;
                } else {
                    sReply = "While waiting outside the store two people walk by muttering about there is going to be a blue moon and the it isn't safe tonight. The kid then comes out of the store with the cheese and starts walking home. Do you ask the kid about the rumours or just follow him as don't know where you are?";
                    this.stateCur = GameState.HELP_ASK;
                }
                break;
            case GameState.HELP_ASK:
                if (sInput.toLowerCase().match("ask")) {
                    sReply = "You ask the kid what's going on but he doesn't answer so you decide to follow him. You walk through a very rundown area of town until you reach a house that is falling apart. The kid walks up to the door and knocks. His mother answers. She sees you and mutters 'ah, fresh meat', licks her lips, and then says good job to her son. You then realize you have to run. You barely manage to escape and after 30 minutes of running you realize your right outside your home. Time for bed.";
                    this.stateCur = GameState.DONE;
                } else {
                    sReply = "You decide to follow the kid. You walk through a very rundown area of town until you reach a house that is falling apart. The kid walks up to the door and knocks. His mother answers. She sees you and mutters 'ah, fresh meat', licks her lips, and then says good job to her son. You then realize you have to run. You barely manage to escape and after 30 minutes of running you realize your right outside your home. Time for bed.";
                    this.stateCur = GameState.DONE;
                }
                break;
            case GameState.DONE:
                sReply = "The End";
                this.stateCur = GameState.WELCOMING;
        }
        return ([sReply]);
    }
}