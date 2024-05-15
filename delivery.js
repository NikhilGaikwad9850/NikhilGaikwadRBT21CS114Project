let brand_item_id=document.getElementById('brand_item_id');
let btn_brands_left=document.getElementById('btn_brands_left');
let btn_brands_right=document.getElementById('btn_brands_right');

btn_brands_left.addEventListener('click',()=>{
    brand_item_id.scrollLeft+=170;

    if (brand_item_id.scrollLeft >0) {
        btn_brands_right.style.display="flex";
        
    }else{
        btn_brands_right.style.display="none";
    }
    if (brand_item_id.scrollLeft >500) {
        btn_brands_left.style.display="none";
        
    }else{
        btn_brands_left.style.display="flex";
    }

});
btn_brands_right.addEventListener('click',()=>{
    brand_item_id.scrollLeft -= 170;

    if (brand_item_id.scrollLeft >0) {
        btn_brands_right.style.display="flex";
        
    }else{
        btn_brands_right.style.display="none";
    }
    if (brand_item_id.scrollLeft >500) {
        btn_brands_left.style.display="none";
        
    }else{
        btn_brands_left.style.display="flex";
    }

});

let brand_item_id2=document.getElementById('brand_item_id2');
let btn_brands_left2=document.getElementById('btn_brands_left2');
let btn_brands_right2=document.getElementById('btn_brands_right2');


btn_brands_left2.addEventListener('click',()=>{
    brand_item_id2.scrollLeft+=170;

    if (brand_item_id2.scrollLeft >0) {
        btn_brands_right2.style.display="flex";
        
    }else{
        btn_brands_right2.style.display="none";
    }
    if (brand_item_id2.scrollLeft >500) {
        btn_brands_left2.style.display="none";
        
    }else{
        btn_brands_left2.style.display="flex";
    }

});
btn_brands_right2.addEventListener('click',()=>{
    brand_item_id2.scrollLeft -= 170;

    if (brand_item_id2.scrollLeft >0) {
        btn_brands_right2.style.display="flex";
        
    }else{
        btn_brands_right2.style.display="none";
    }
    if (brand_item_id2.scrollLeft >500) {
        btn_brands_left2.style.display="none";
        
    }else{
        btn_brands_left2.style.display="flex";
    }

});

