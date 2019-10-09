const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    ALLEY: Symbol("alley"),
    CONFRONT: Symbol("confront"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You were walking around downtown and you see kids fighting over a wallet in an alley. The kids see you and stop. Do you enter the alley or do you continue on your way?";
                this.stateCur = GameState.ALLEY;
                break;
            case GameState.ALLEY:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "All of the kids but one run leaving the wallet to the scrawniest kid you have ever seen. Do you confront the kid or continue on your way?";
                    this.stateCur = GameState.CONFRONT
                }else{
                    sReply ="All of the kids but one run leaving the wallet to the scrawniest kid you have ever seen. The kid leaves the alley and looks at you. Do you confront the kid or continue on your way?";
                    this.stateCur = GameState.CONFRONT;
                }
                break;
            case GameState.CONFRONT:
                if(sInput.toLowerCase().match("confront")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you go in or run back to the car?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;
    
                }
                break;
        }
        return([sReply]);
    }
}