def lastdigit(n):
    assert 0<=n<=10**14
    a=0
    b=1
    sum=0
    
    for i in range(n):
        a,b = b%10, a%10+b%10
        sum = (sum+a)%10
    return sum

input_num = int(input())
print(lastdigit(input_num))