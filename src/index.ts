/*import promptSync from 'prompt-sync';

const prompt = promptSync();

type Order = {
    customerName: string;
    phoneNumber: string;
    postalCode: string;
    paymentMethod: 'card' | 'paypal' | 'cash';
};

function LenngthCheck(minLength: number, maxLength: number, input: string): boolean {
    if (input.length < minLength || input.length > maxLength) {
        console.log(`Error: Input length must be between ${minLength} and ${maxLength}.`);
        return false;
    } else {
        return true;
    }
}

function validatePhonePattern(phone: string): boolean {
    if (!/^\+\d+$/.test(phone)) {
        console.log("Phone number should start with a '+' followed by digits only.");
        return false;
    }
    return true;
}

function CreateOrder(): Order {
    const customerName: string = prompt('Enter your name: ') ?? '';
    const phoneNumber: string = prompt('Enter your phone number (format: +1234567890): ') ?? '';
    const postalCode: string = prompt('Enter your postal code (format: 12345): ') ?? '';
    const paymentMethod: 'card' | 'paypal' | 'cash' = prompt('Enter your payment method (card | paypal | cash): ') as 'card' | 'paypal' | 'cash';
    if (
        LenngthCheck(1, 50, customerName) &&
        validatePhonePattern(phoneNumber) &&
        LenngthCheck(11, 14, phoneNumber) &&
        LenngthCheck(4, 6, postalCode) &&
        (paymentMethod === 'card' || paymentMethod === 'paypal' || paymentMethod === 'cash')
    ) {
        const order: Order = {
            customerName: customerName,
            phoneNumber: phoneNumber,
            postalCode: postalCode,
            paymentMethod: paymentMethod
        };

        return order;
    }

    throw new Error('Invalid order data.');
}

let orders: Order[] = [];

while(true) {
    try {
        const order: Order = CreateOrder();
        orders.push(order);
        console.log('Order created successfully!');
        console.log("Do you want to create another order? (yes/no)");
        const anotherOrder = prompt('Enter yes to create another order: ')?.trim().toLowerCase();

        if (anotherOrder === 'yes') {
            continue;
        }

        console.log("Your orders:");
        orders.forEach((order) => {
            console.log(`Customer Name: ${order.customerName}, Phone Number: ${order.phoneNumber}, Postal Code: ${order.postalCode}, Payment Method: ${order.paymentMethod}`);
        });
        break;
    }
    catch (error) {
        console.error(error);
        false;
    }
}
*/

import company from './data.json'

const CompanyNames = company.map((company: { name: string }) => company.name);

console.log(CompanyNames);

const shortInfo = company.flatMap((company) =>
    company.models.map((model) => ({
        name: model.name,
        productionStart: model.productionStart,
        totalProduced: model.totalProduced
    }))
);

console.log(shortInfo);

const dissolvedCompanies = company.filter((company) => company.dissolved !== null);

console.log(dissolvedCompanies);

const USACompanies = company.filter((company) => company.country === 'USA');

console.log(USACompanies);

const startsWithA = company.filter((company) => company.name.startsWith('A'));

console.log(startsWithA);

const ageBiggerThan30 = company.filter((company) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - company.founded;
    return age > 30;
});

console.log(ageBiggerThan30);

const totalModelsProduced = company.reduce((total, company) => {
    const companyTotal = company.models.reduce((companySum, model) => companySum + model.totalProduced, 0);
    return total + companyTotal;
}, 0);

console.log(totalModelsProduced);

const planeNames = company.flatMap((company) => company.models.map((model) => model.name));

console.log(planeNames);

const companiesWithTotalPlanes = company.map((company) => {
    const totalPlanes = company.models.reduce((sum, model) => sum + model.totalProduced, 0);

    return { name: company.name, totalPlanes };
});

console.log(companiesWithTotalPlanes);

const morethan2engines = company.filter((company) =>
    company.models.some((model) => model.engines > 2)
);

console.log(morethan2engines);

const dissolvedCompaniesPlanes = dissolvedCompanies.flatMap((company) =>
    company.models.map((model) => ({
        companyName: company.name,
        modelName: model.name,
        totalProduced: model.totalProduced
    }))
);

console.log(dissolvedCompaniesPlanes);

const oneEnginePlaneCount = company.reduce((count, company) => {
    const oneEnginePlanes = company.models.filter((model) => model.engines === 1);
    return count + oneEnginePlanes.length;
}, 0);

console.log(oneEnginePlaneCount);

const planesAfter1990Count = company.reduce((count, company) => {
    const planesAfter1990 = company.models.filter((model) => model.productionStart > 1990);
    return count + planesAfter1990.length;
}, 0);

console.log(planesAfter1990Count);

const planeAndEnginesCount = company.flatMap((company) =>
    company.models.map((model) => ({
        modelName: model.name,
        engines: model.engines
    }))
);

console.log(planeAndEnginesCount);

const TotalEnginesMade = company.reduce((total, manufacturer) => {
    return total + manufacturer.models.reduce((modelTotal, model) => {
        return modelTotal + model.engines * model.totalProduced;
    }, 0);
}, 0);

console.log(TotalEnginesMade);



    


