export class ProductData {
    productId(productId: any, customerId: string) {
      throw new Error('Method not implemented.')
    }
    pId: number
    pName: string
    pDescription: string
    pPrice: number
    pQuantity: number
    pImgurl: string

    constructor(pId: any, pName: any, pDescription: any, pPrice: any, pQuantity: any, pImgurl: any) {
      this.pId = pId
      this.pName = pName
      this.pDescription = pDescription
      this.pPrice = pPrice
      this.pQuantity = pQuantity
      this.pImgurl = pImgurl
    }
  }