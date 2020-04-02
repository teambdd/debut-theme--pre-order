# Debut theme - enable custom Pre Order (Recommended 1 variant)

# Indonesia version

  PENTING! Ini adalah tutorial lanjutan dan tidak didukung oleh Shopify. Pengetahuan tentang bahasa desain web seperti HTML, CSS, JavaScript, dan Liquid diperlukan.
  dan ingat 'do with your own risk'. happy coding! :)
  
   > Untuk menambahkan modifikasi ini diperlukan beberapa perubahan, untuk tema lain bisa disesuaikan dengan file dibawah ini 
   file yang harus kita modifikasi adalah :
   1. product-template.liquid
   2. theme.js

### Instalasi
- Buka product-template.liquid dan cari class .single-option-selector dan disitu terdapat tag option. tambahkan atribut id untuk menampung teks PRE - ORDER menjadi seperti ini 

     ```<option value="{{ value | escape }}"{% if option.selected_value == value %} selected="selected"{% endif %} id="{% for variant in product.variants %}{% if variant.title ==  value %}{% if variant.inventory_quantity < 1 %}{{ value }}Pre-Order{% else %}Available{% endif %}{% endif %}{% endfor %}">```

- Tambahkan kode javascript ini dipaling bawah kedalam file theme.js atau anda bisa menambahkan file javascript baru kedalam folder asset

    ``` 
    $(".single-option-selector").change(function () {
      var teks = "";
      $(".single-option-selector option:selected").each(function() {
        teks += $(this).attr('id');
      });
      $('.pre-order-teks').text(teks);
      $('.product-form__cart-submit').text(teks);
    }).change();
    ```
- lalu tambahkan kode html ini dibawah class product-single__title untuk menampung teks "Pre-order-teks" seperti dibawah ini 

    ```
    <h1 class="product-single__title">{{ product.title }}</h1>
    <span class="pre-order-teks"></span>
    ```
- simpan semua dan selamat penambahan modifikasi pre order sudah selesai

> Jika mempunyai pertanyaan seputar modifikasi ini, silahkan email ke aditya@bolehdicoba.com

# English version

IMPORTANT! This is an advanced tutorial and is not supported by Shopify. Knowledge of web design languages such as HTML, CSS, JavaScript, and Liquid is required.

> To add this modification some changes are needed, for other themes can be adjusted with the file below.
The file that we have to modify is :
1. product-template.liquid
2. theme.js

### Installation
- Open product-template.liquid and look for the class .single-option-selector and there is an option tag. add the id attribute to hold the PRE-ORDER text to be like this
 
    ```<option value="{{ value | escape }}"{% if option.selected_value == value %} selected="selected"{% endif %} id="{% for variant in product.variants %}{% if variant.title ==  value %}{% if variant.inventory_quantity < 1 %}{{ value }}Pre-Order{% else %}Available{% endif %}{% endif %}{% endfor %}">```

- Add this javascript code at the bottom into the theme.js file or you can add a new javascript file to the assets folder

    ``` 
        $(".single-option-selector").change(function () {
          var teks = "";
          $(".single-option-selector option:selected").each(function() {
            teks += $(this).attr('id');
          });
          $('.pre-order-teks').text(teks);
          $('.product-form__cart-submit').text(teks);
        }).change();
    ```
    
- then add this html code under the class .product-single__title to hold the "Pre-order-teks" text as below 

    ```
    <h1 class="product-single__title">{{ product.title }}</h1>
    <span class="pre-order-teks"></span>
    ```
- save all and congratulations on adding pre order modifications

> If you have questions about this modification, please contact to aditya@bolehdicoba.com
