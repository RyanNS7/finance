interface IAmountSpentDTO{
    id: string
    description?: string
    money_spent: number
    day_was_the_spent: Date
    userID: string
}

export class AmountSpentDTO{
    amountSpent: IAmountSpentDTO

    constructor(amountSpent: IAmountSpentDTO){
        this.amountSpent = amountSpent
    }
}