def prime(N):
    p = [1] * (N+1)
    p[0] = 0
    p[1] = 0
    for i in range(2, int(N**0.5)+1):
        if p[i] == 1:
            for j in range(i*2, N+1, i):
                p[j] = 0
    return [x for x in range(N+1) if p[x] == 1]