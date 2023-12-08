function type1(val: number): number {
    return val;
}

function type2(val2: any): any {
    return val2;
}

/* with generics */
function type3<Type>(val3: Type): Type {
    return val3;
}

function type4<T>(val4: T): T{
    return val4;
}