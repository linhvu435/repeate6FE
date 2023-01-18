import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Shop} from "../../model/Shop";
import {Bill} from "../../model/Bill";
import {BillStatus} from "../../model/BillStatus";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {ImgProduct} from "../../model/ImgProduct";
import {ShopAddress} from "../../model/ShopAddress";
import {Voucher} from "../../model/Voucher";
import {VoucherType} from "../../model/VoucherType";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShopService {



  constructor(private http:HttpClient) { }

  findById1(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${API_URL}/shop/${id}`);

  }
  findShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${API_URL}/shop/shop/${id}`);
  }
  setIdShop(id : any){
    localStorage.setItem("idShop",id);
  }
  getIdShop(){
    return localStorage.getItem("idShop")
  }
  setImgShop(img : any){
    localStorage.setItem("imgShop",img);
  }
  getImgShop(){
    localStorage.getItem("imgShop")
  }
  setAddressShop(address : any){
    localStorage.setItem("addressShop", address)
  }
  getAddressShop(){
    return localStorage.getItem("addressShop")
  }
  setNameShop(nameShop : any){
    localStorage.setItem("nameShop", nameShop)
  }
  setName(name : any){
    localStorage.setItem("name", name)
  }

  registershop(shop :any): Observable<any>{
    return this.http.post<any>(`${API_URL}/showproduct/registershop`,shop);
  }

  getallshopaddress(): Observable<any>{
    return this.http.get<any>(`${API_URL}/showproduct/getalladdressshop`);
  }
  getallimgproduct(id:number): Observable<ImgProduct[]>{
    return this.http.get<ImgProduct[]>(`${API_URL}/showproduct/getimgsproduct/${id}`);
  }


  getAllBillshop(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop`);
  }

  getAllProductMyShop(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/showproduct/showmyshopproduct`);
  }


  //voucher
  getvoucher():Observable<Voucher[]>{
    return this.http.get<Voucher[]>(`${API_URL}/showvoucher`);
  }
  getvouchertype():Observable<VoucherType[]>{
    return this.http.get<VoucherType[]>(`${API_URL}/getallvouchertype`);
  }

  getvoucherbyshop_id(idShop:number):Observable<Voucher[]>{
    return this.http.get<Voucher[]>(`${API_URL}/showvoucher/${idShop}`);
  }
  create(idVoucher:number,amount:number):Observable<Voucher>{
    return this.http.get<Voucher>(`${API_URL}/createvoucher/${idVoucher}/${amount}`);
  }

  delete(idVoucher:number):Observable<Voucher[]>{
    return this.http.get<Voucher[]>(`${API_URL}/deletevoucher/${idVoucher}`);
  }

  //endvoucher
  getallcategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${API_URL}/showproduct/getcategoryshopproduct`);
  }
  editshop(name :string): Observable<Shop>{
    return this.http.get<Shop>(`${API_URL}/shop/editnameshop/${name}`);
  }

  tinhsaosp(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/order/tinhsaosp`);
  }



  getcategoryshopuser(idShop:number): Observable<Category[]>{
    return this.http.get<Category[]>(`${API_URL}/showproduct/getcategoryshopuser/${idShop}`);
  }
  ShowMyShop(): Observable<Shop>{
    return this.http.get<Shop>(`${API_URL}/showproduct/showmyshop`);
  }

  getallBillStatus():Observable<any>{
    return this.http.get<any>(`${API_URL}/order/getallbillstatus`);
  }

  getallBillStatus1():Observable<any>{
    return this.http.get<any>(`${API_URL}/order/showbillstatusmybill`);
  }


  setbill(idbill:number,idstatus:number):Observable<Bill>{
    return this.http.get<Bill>(`${API_URL}/order/setbill/${idbill}/${idstatus}`);
  }

  //trang bill người bán
  showbillbystatus(id:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop/${id}`);
  }
  showbillbyidbill(id:number):Observable<ProductInBillDTO>{
    return this.http.get<ProductInBillDTO>(`${API_URL}/order/showBillShopbyidbill/${id}`);
  }


  //trang bill nguười mua
  showbillbyidbill1(id:number):Observable<ProductInBillDTO>{
    return this.http.get<ProductInBillDTO>(`${API_URL}/orderuser/showBillShopbyidbill/${id}`);
  }

  showbillbystatus1(id:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/orderuser/showBillShop/${id}`);
  }
  getstarshop(id:number):Observable<any>{
    return this.http.get<any>(`${API_URL}/showproduct/getstarshop/${id}`);
  }

  getAllBillshop1(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/orderuser/showBillShop`);
  }


  searchbycategory(category_id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchcategory/${category_id}`);
  }

  searchbypriceminmax(pricemin:number,pricemax:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${pricemin}/${pricemax}`);
  }

  searchbyname(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${name}`);
  }

  searchbynamminmaxe(name:string,pricemin:number,pricemax:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/order/${pricemin}/${pricemax}/${name}`);
  }







  FindIdShopByProductId(id : number): Observable<number> {
    return this.http.get<number>(`${API_URL}/shop/shopId/${id}`,);
  }

  getProductByIdShop(id : number): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products/${id}`,);
  }

  danhdaulahethang(id : number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/showproduct/hethang/${id}`,);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL +  '/products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/edit/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
  GetCarts(){
    // @ts-ignore
    let CartJson = JSON.parse(localStorage.getItem("carts"));
    return CartJson
  }
  saveCart(carts :any){
    let cartJson = JSON.stringify(carts)
    localStorage.setItem("carts",cartJson)
  }

  getCartTotalPrice(){
    let carts : any = this.GetCarts();
    let total : number = 0;
    if (carts!=null){
      carts.forEach((item: any)=>{
        total += item.amount*item.price
      })
    }
    return total;
  }
}
