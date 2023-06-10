export default class userStatus{
    private userData: any;
    constructor(userData : any, dispatch : any){
        this.userData = userData
    }

    creatingConversation() : boolean{
        return this.userData.isCreatingConversation
    }

    openingConversation() : boolean{
        return this.userData.isOpeningConversation !== null
    }
    allowShowButton() : boolean{
        return !this.userData.isCreatingConversation && this.userData.isOpeningConversation !== null
    }





}