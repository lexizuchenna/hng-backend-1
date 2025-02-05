import { NextResponse } from "next/server";
import axios from "axios";

// Function to check if a number is prime
const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if a number is perfect
const isPerfect = (num: number): boolean => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num: number): boolean => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
    return sum === num;
};

// Function to get a fun fact from Numbers API
const getFunFact = async (num: number): Promise<string> => {
    try {
        const {data} = await axios.get(`http://numbersapi.com/${num}/math`);
        return data;
    } catch (error) {
        return "Fun fact unavailable.";
    }
};

// API Handler
export async function GET(req: Request) {
    const url = new URL(req.url);
    const numberParam = url.searchParams.get("number");

    // Validate input
    if (!numberParam || isNaN(Number(numberParam))) {
        return NextResponse.json({ number: numberParam, error: true }, { status: 400 });
    }

    const number = parseInt(numberParam, 10);
    const properties: string[] = [];

    if (isArmstrong(number)) properties.push("armstrong");
    properties.push(number % 2 === 0 ? "even" : "odd");

    const response = NextResponse.json({
        number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties,
        digit_sum: number.toString().split("").reduce((sum, d) => sum + parseInt(d), 0),
        fun_fact: await getFunFact(number),
    });

    response.headers.set("Access-Control-Allow-Origin", "*");

    return response;
}
