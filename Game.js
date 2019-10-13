const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ALLEY: Symbol("alley"),
    CONFRONT: Symbol("confront"),
    FLAT: Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

export default class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case GameState.WELCOMING:
                sReply = "You were walking around downtown and you see kids fighting over a wallet in an alley. The kids see you and stop. Do you stop or continue on your way?";
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
            case GameState.LOST://TODO
                if (sInput.toLowerCase().match("call")) {
                    sReply = "You decided to call for help. You took your phone our of your pocket and you have no signal. You see the same scrawny kid from the alley. Do you approach the kid or keep wandering till you find your way?";
                    this.stateCur = GameState.APPROACH_KID_LOST;
                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;
                }
                break;
            case GameState.APPROACH_KID_LOST:
                    if (sInput.toLowerCase().match("approach")) {
                        sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                        this.stateCur = GameState.CHASE;
    
                    } else {
                        sReply = "You decide to continue wondering. After 30 minutes still have no idea where you are. Do you try and call for help or continue wondering?";
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
                    sReply = "You decide to try and fight off the kids to no avail. You lose the other kids from the alley and then watch the scwrany kid enter an old decrepit building. Do you enter the building or turn back?";
                    this.stateCur = GameState.ENTER_HOUSE;
                } else {
                    sReply = "You decide to chase after the scrawny kid. You lose the other kids from the alley and then watch the scwrany kid enter an old decrepit building. Do you enter the building or turn back?";
                    this.stateCur = GameState.ENTER_HOUSE;
                }
                break;
            case GameState.ENTER_HOUSE://TODO:
                if (sInput.toLowerCase().match("enter")) {
                    sReply = "You enter decrepit house and see the kid crying. ?";
                    this.stateCur = GameState.FLAT;
                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;
                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.APPROACH_KID:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You decide to try and approach the kid. He runs. Do you chase or continue walking?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;

        }
        return ([sReply]);
    }
}