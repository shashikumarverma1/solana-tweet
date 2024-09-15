use anchor_lang::prelude::*;

declare_id!("9kw4Kq4e8ZbeHXhuHvZTeJ7cBzVyGi1VS47Usf7ANt8f");

#[program]
pub mod tweet {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
