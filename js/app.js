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
        console.log(customers[i].name); 
    }
}

let company = [
    {
        name: `TechEmpower`,
        stock_symbol: `TE`,
        sector: `Technology`,
        industry: `Consumer Electronics`,
        founded: 1801,
        headquarters: `San Francisco`,
        market_cap: 5000000000,
        yearly_revenue: 1000000000,
        yearly_profit: 100000000,
        employees: 5000
    },
    {
        name: `MedicoPharma`,
        stock_symbol: `MP`,
        sector: `Healthcare`,
        industry: `Pharmaceuticals`,
        founded: 1990,
        headquarters: `New York`,
        market_cap: 10000000000,
        yearly_revenue: 2000000000,
        yearly_profit: 500000000,
        employees: 8000
    },
    {
        name: `Discount World`,
        stock_symbol: `DW`,
        sector: `Retail`,
        industry: `Discount Stores`,
        founded: 1949,
        headquarters: `Chicago`,
        market_cap: 2000000000,
        yearly_revenue: 500000000,
        yearly_profit: 50000000,
        employees: 3000
    },
    {
        name: `ProudCorp`,
        stock_symbol: `PC`,
        sector: `Consumer Goods`,
        industry: `Personal Products`,
        founded: 1985,
        headquarters: `Toronto`,
        market_cap: 8000000000,
        yearly_revenue: 1500000000,
        yearly_profit: 250000000,
        employees: 10000
    },
    {
        name: `E-Marketplace`,
        stock_symbol: `EM`,
        sector: `Retail`,
        industry: `E-commerce`,
        founded: 2000,
        headquarters: `Seattle`,
        market_cap: 600000000000,
        yearly_revenue: 3000000000,
        yearly_profit: 300000000,
        employees: 12000
    }
];

i = 0;
while(i < company.length)
{
    console.log(company[i].name, company[1].yearly_revenue);
    i++;
}

for(let i = 0; i < company.length; i++)
{
    if(company[i].sector === `Technology`)
    {
        console.log(company[i].name);
    }
}

for(let i = 0; i < company.length; i++) 
{
    if (company[i].founded < 1950)
    {
        console.log(company[i].name, company[i].founded);
    }
}

i = 0;
while(i < company.length)
{
    if (company[i].market_cap > 500000000000)
    {
        console.log(company[i].name);
    }
    i++;
}

for(let i = 0; i < company.length; i++)
{
    if(company[i].sector != `Technology`)
    {
        console.log(company[i].name, company[i].sector);
    }
}

i = 0;
while(i < company.length)
{
    if(company[i].yearly_revenue >= 1000000000 && company[i].yearly_revenue <= 100000000000)
    {
        console.log(company[i].name, company[i].yearly_revenue);
    }
    i++;
}

let revenue_sum = 0;
for(let i = 0; i < company.length; i++)
{
    revenue_sum = revenue_sum + company[i].yearly_revenue
}

let revenue_average = revenue_sum / company.length;
console.log(revenue_average);

let highest_profit = 0;
let highest_profit_company = [];

for (let i = 0; i < company.length; i++)
{
    if (highest_profit < company[i].yearly_profit)
    {
        highest_profit = company[i].yearly_profit;
        highest_profit_company = company[i].name;
    }
}

console.log(highest_profit_company);


let highest_revenue_per_employee = 0;
let highest_revenue_per_employee_company = ``;
for (let i = 0; i < company.length; i++)
{
    let revenue_per_employee = company[i].yearly_revenue / company[i].employees;

    if (revenue_per_employee > highest_revenue_per_employee)
    {
        highest_revenue_per_employee = revenue_per_employee;
        highest_revenue_per_employee_company = company[i].name;
    }
}

console.log(highest_revenue_per_employee_company);

function sum_of_even_index(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i = i + 2)
    {
        sum = sum + arr[i];
    }
    return sum;
}

let my_sum = sum_of_even_index([14, 12, 33, 42, 57, 61, 73, 87, 98, 100, 116, 172]);

console.log(my_sum);

function longest_string(arr)
{
    let str = ``;
    for (let i = 0; i < arr.length; i++)
    {
        if(str.length < arr[i].length)
        {
            str = arr[i];
        }
    }
    return str;
}

let my_longest_string = longest_string([`asdf`, `asdfds`, `asdfgasasdfg`]);

function is_subscribed_and_18(arr)
{
    let new_array = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].is_subscribed === false)
        {
           new_array.push(arr[i]);
        }

    }
    return new_array;
}

let my_array = is_subscribed_and_18([{name: `isael`, age: 56, is_subscribed: false}, {name: `amy`, age: 14, is_subscribed: true}, {name: `chantal`, age: 75, is_subscribed: false}, {name: `claudine`, age: 39, is_subscribed: true}, {name: `miggel`, age: 38, is_subscribed: false}]);

function subscribed_message (arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i].is_subscribed;
    }
    if(sum / arr.length >= 0.5)
    {
        console.log(`At least 50% of users are subscribed`);
    }
}

let my_message = subscribed_message([{name: `isael`, age: 56, is_subscribed: false}, {name: `amy`, age: 14, is_subscribed: true}, {name: `chantal`, age: 75, is_subscribed: false}, {name: `claudine`, age: 39, is_subscribed: true}, {name: `miggel`, age: 38, is_subscribed: false}]);


