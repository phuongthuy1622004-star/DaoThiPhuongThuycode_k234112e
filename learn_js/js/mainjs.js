/*Cách 1 thông qua trung gian*/
function calc_factorial(n)
{
    fact=1
    for(i=1;i<=n;i++)
    {
        fact*=i
    }
    return fact
}
/*Cách 2 trực tiêp*/
function use_factorial(n, result)
{
    fact=calc_factorial(n)
    result.innerText=fact
}
