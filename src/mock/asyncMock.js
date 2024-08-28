const products = [    
{"name":"Case Nintendo Switch","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453316/9E5A6DEA-0F5E-4303-8053-ECD3C08BCD60_1_105_c_gto7a2.jpg","category":"gaming","description":"Estuche","price":3,"stock":23},
{"name":"Graphic Card MSI - Geforce RTX ","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453315/69A25B77-9DAA-4017-AF44-3D371928FED7_1_105_c_g9qd2v.jpg","category":"informatica","description":"Tarjeta grafica","price":5,"stock":5},
{"name":"Teclado Cat Pink","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453306/BDDF117C-01F4-41E2-AF5E-46C826638199_1_102_o_mshtme.jpg","category":"gaming","description":"Teclado","price":4,"stock":13},
{"name":"Taza con infusor","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722466765/38FBAD9F-567B-48A5-84BF-291D7BEF9BD2_1_105_c_jsusbg.jpg","category":"accesorios","description":"taza","price":7,"stock":12},
{"name":"Resaltadores MICHIS","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722466750/8E072CF4-9667-42F1-B99D-8DE87C42A706_1_105_c_zqgono.jpg","category":"accesorios","description":"Resaltadores","price":1,"stock":2},
{"name":"Rude Michi","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722466726/06027A0D-1708-4B32-A39B-59D4A828A6D6_1_105_c_kp96pj.jpg","category":"accesorios","description":"taza","price":3,"stock":10},
{"name":"Paw Cup","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722466725/E5C2DE3B-1F0F-4019-AA0A-0AC6A2E51213_1_102_o_sblcwi.jpg","category":"accesorios","description":"vaso de vidrio","price":5,"stock":4},
{"name":"Cubiertos - Paws","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722466729/9D9805BB-C63B-40B0-B655-9C48B86BEC01_1_105_c_ogze78.jpg","category":"accesorios","description":"cubiertosw","price":12,"stock":11},
{"name":"Cat Mouse - Wireless","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453310/059577A5-F75F-4334-8E94-F87AAA61D21D_1_102_o_ndjtve.jpg","category":"informatica","description":"mouse","price":3,"stock":14},
{"name":"Monitor Asus ProArt","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453311/07305EC7-646A-421D-BDEE-53F67D7CD960_1_105_c_sta9qe.jpg","category":"informatica","description":"Female","price":1000,"stock":7},
{"name":"Web Cam Razer - Full HD","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453313/6F95111F-0C37-44FF-B57A-CBB582C03A92_1_105_c_gvlear.jpg","category":"informatica","description":"Camara web","price":55,"stock":2},
{"name":"Pusheen Mouse pad - Luces LED","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453308/C4565C46-C644-4A84-8F35-B92845387371_1_102_o_hizgy1.jpg","category":"gaming","description":"mouse pad","price":5,"stock":9},
{"name":"Cat Headphones - Luces LED","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453310/882BEF5D-E614-405A-A392-08657823A16E_1_102_o_nm6q8a.jpg","category":"gaming","description":"auriculares","price":5,"stock":6},
{"name":"Michi Sillón Gamer","image":"https://res.cloudinary.com/du1qwcdcu/image/upload/v1722453088/IMG_9455_lescqi.webp","category":"gaming","description":"silla gamer","price":30,"stock":7}
]

export const getProducts = ()=> {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve (products)
            },500)            
        })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === parseInt(productId)))
        }, 500);
        
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.filter((prod) => prod.category === categoryId))
        }, 500);
        
    })
}

export default products