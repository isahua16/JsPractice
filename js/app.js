let customer_name = `Robber Guy`;
let account_balance = 10000;
let is_active = false;

if (account_balance >= 10000)
{
    console.log(`This is your special message`);
} else if (account_balance >= 5000) 
{
    console.log(`You are a valued customer!`);
} else if (account_balance >= 1000)
{
    console.log(customer_name, account_balance);
} else {
    console.log(customer_name);
}

if (is_active === false && account_balance >= 1)
{
    console.log(`System Error: ${customer_name}`);
}

if(customer_name === `Robber Guy` && (account_balance > 0 || is_active === true))
{
    console.log(`Robber Alert!`);
}

let customer_object = {
    name: `Joane`,
    total_balance: -20,
    is_active: true
}

if (customer_object.total_balance < 0)
{
    console.log(`🚩 ERROR 🚩`);
}

let customers = [
    {
        name: `Joe`,
        total_balance: 600,
        is_active: true
    },
    {
        name: `Jane`,
        total_balance:0,
        is_active: false
    },
    {
        name: `Bob`,
        total_balance: 5000,
        is_active: true
    }
];

let i = 0;
while (i < customers.length)
{
    if (customers[i].is_active === true)
    {
     console.log(customers[i].name, customers[i].total_balance);   
    }
    i++;
}

for(let i = 0; i < customers.length; i++)
{
    if (customers[i].is_active === false)
    {
        console.log(customers[i].name, customers[i].total_balance); 
    }
}

