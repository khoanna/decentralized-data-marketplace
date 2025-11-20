module contract::access {

    use contract::marketplace::Dataset;
    use sui::coin::Coin;
    use sui::sui::SUI;
    use sui::coin::balance;
    use sui::transfer::public_transfer;

    const FEE_RATE:u64 = 1;

    #[error]
    const EInsufficientBalance:vector<u8> = b"Insufficient balance";

    #[error]
    const EInvalidOwnership:vector<u8> = b"Cannot get access to this dataset";

    public struct NFT has key, store{
        id: UID,
        dataset_id: ID
    }
    #[allow(lint(self_transfer))]
    public fun buy_dataset(dataset: &mut Dataset, coin: &mut Coin<SUI>, ctx: &mut TxContext){
        // let user_balance = coin.into_balance().value();
        assert!(balance(coin).value() >= dataset.get_price(), EInsufficientBalance);
        let mut paid = coin.split(dataset.get_price(), ctx);
        let fee = paid.split((FEE_RATE/100)*dataset.get_price(), ctx);
        public_transfer(paid, dataset.get_owner());
        let new_NFT = NFT{
            id: object::new(ctx),
            dataset_id: object::id(dataset)
        };
        dataset.increase_amount_sold();
        transfer::transfer(new_NFT, ctx.sender());
        transfer::public_transfer(fee, @admin_addr);
    }
    
    public fun seal_approve(_id: vector<u8> ,dataset: &Dataset, nft: &NFT){
        assert!(object::id(dataset) == nft.dataset_id, EInvalidOwnership);
    }
    


}