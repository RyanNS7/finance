interface totalBalance{
    id: string
    total_balance: bigint
    userID: string
}

export class TotalBalanceDTO{
    totalBalance: totalBalance

    constructor(totalBalance: totalBalance){
        this.totalBalance = totalBalance
    }
}