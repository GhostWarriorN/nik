
function Determinant(n,...a) {
//2*2
    if(n == 2) {     
        return ((a[0]*a[3])-(a[1]*a[3]));
    }
//3*3
    if(n == 3) {
        return (
            ((a[0]*a[4]*a[8])+(a[1]*a[5]*a[6])+(a[2]*a[3]*a[7])) 
            -
            ((a[2]*a[4]*a[6])+(a[0]*a[5]*a[7])+(a[1]*a[3]*a[8]))
        )
    }
//4*4
    if(n == 4) {
        let A11 = Determinant(3,a[5],a[6],a[7],a[9],a[10],a[11],a[13],a[14],a[15]);
        let A12 = Determinant(3,a[4],a[6],a[7],a[8],a[10],a[11],a[12],a[14],a[15]);
        let A13 = Determinant(3,a[4],a[5],a[7],a[8],a[9],a[11],a[12],a[13],a[15]);
        let A14 = Determinant(3,a[4],a[5],a[6],a[8],a[9],a[10],a[12],a[13],a[14]);
        return ((a[0]*A11)-(a[1]*A12)+(a[2]*A13)-(a[3]*A14));
    }

}
console.log(Determinant(4,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16));