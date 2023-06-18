const productBin = [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ]
   var a = (JSON.stringify(productBin[0].quantity))
   var b = (JSON.stringify(productBin[1].quantity))
   var c = (JSON.stringify(productBin[2].quantity))

   a = parseInt(a);
   b = parseInt(b);
   c = parseInt(c);

console.log(a)
console.log(b)
console.log(c)
console.log(a+b+c)

/*function jumlah (a,b,c){
    console.log(a+b+c)
}
jumlah(a,b,c)*/

const test = Object.keys(productBin).length;
console.log("total quantity dari data", test);