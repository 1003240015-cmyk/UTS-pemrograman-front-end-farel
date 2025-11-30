document.addEventListener('DOMContentLoaded', function() {
    
    // Referensi Elemen DOM
    const furnitureSelect = document.getElementById('furniture-type');
    const woodRadios = document.querySelectorAll('input[name="wood"]');
    const colorCircles = document.querySelectorAll('.color-circle');
    const totalPriceElement = document.getElementById('total-price');
    const productImage = document.getElementById('product-image');

    // Data Gambar Dummy (Untuk simulasi perubahan tipe)
    const productImages = {
        chair: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        sofa: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        table: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };

    // Fungsi Hitung Harga
    function updatePriceAndPreview() {
        // 1. Ambil harga dasar furniture
        let basePrice = parseInt(furnitureSelect.options[furnitureSelect.selectedIndex].dataset.price);
        let type = furnitureSelect.value;

        // 2. Ambil harga jenis kayu
        let woodPrice = 0;
        let selectedWood = "";
        woodRadios.forEach(radio => {
            if(radio.checked) {
                woodPrice = parseInt(radio.dataset.price);
                selectedWood = radio.value;
            }
        });

        // 3. Hitung Total
        let total = basePrice + woodPrice;

        // 4. Format ke Rupiah
        totalPriceElement.textContent = new Intl.NumberFormat('id-ID', { 
            style: 'currency', 
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(total);

        // 5. Ganti Gambar berdasarkan tipe (Simulasi)
        // Dalam real app, kita akan mengganti gambar berdasarkan kombinasi Tipe + Warna
        productImage.src = productImages[type];
        
        // Efek animasi fade in
        productImage.style.opacity = 0.5;
        setTimeout(() => {
            productImage.style.opacity = 1;
        }, 200);
    }

    // Event Listeners

    // 1. Jika user ganti tipe furniture
    furnitureSelect.addEventListener('change', updatePriceAndPreview);

    // 2. Jika user ganti jenis kayu
    woodRadios.forEach(radio => {
        radio.addEventListener('change', updatePriceAndPreview);
    });

    // 3. Jika user ganti warna (Hanya efek visual seleksi di sini)
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
            // Hapus class active dari semua
            colorCircles.forEach(c => c.classList.remove('active'));
            // Tambah ke yang diklik
            this.classList.add('active');
            
            // Simulasi: Mengubah border gambar sesuai warna yang dipilih
            const color = this.dataset.color;
            productImage.style.borderBottom = `5px solid ${color}`;
        });
    });

    // Jalankan sekali saat load
    updatePriceAndPreview();
});
// SIMULASI CRUD DENGAN JAVASCRIPT

// 1. Data Awal (Array of Objects)
let products = [
    { id: 1, name: "Kursi Makan Jati", price: 1500000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400" }
];

// 2. READ: Fungsi menampilkan data ke layar
function renderProducts() {
    const listContainer = document.getElementById('dynamic-product-list');
    listContainer.innerHTML = ""; // Bersihkan isi sebelum render ulang

    products.forEach((product, index) => {
        listContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" style="height: 200px; object-fit: cover; width: 100%;">
                <div class="card-info">
                    <h4>${product.name}</h4>
                    <p class="price">Rp ${product.price.toLocaleString('id-ID')}</p>
                    
                    <button onclick="editProduct(${index})" class="btn-sm" style="background:orange; color:white; border:none; margin-right:5px;">Edit</button>
                    
                    <button onclick="deleteProduct(${index})" class="btn-sm" style="background:red; color:white; border:none;">Hapus</button>
                </div>
            </div>
        `;
    });
}

// 3. CREATE: Fungsi tambah data
function addProduct() {
    const nameVal = document.getElementById('inputName').value;
    const priceVal = document.getElementById('inputPrice').value;
    const imgVal = document.getElementById('inputImage').value || "https://via.placeholder.com/400"; // Gambar default jika kosong

    if(nameVal === "" || priceVal === "") {
        alert("Nama dan Harga harus diisi!");
        return;
    }

    const newProduct = {
        id: Date.now(), // ID unik berdasarkan waktu
        name: nameVal,
        price: parseInt(priceVal),
        img: imgVal
    };

    products.push(newProduct); // Masukkan ke array
    renderProducts(); // Refresh tampilan
    
    // Reset form
    document.getElementById('inputName').value = "";
    document.getElementById('inputPrice').value = "";
    document.getElementById('inputImage').value = "";
}

// 4. DELETE: Fungsi hapus data
function deleteProduct(index) {
    const confirmDelete = confirm("Yakin ingin menghapus produk ini?");
    if(confirmDelete) {
        products.splice(index, 1); // Hapus 1 item di index tersebut
        renderProducts(); // Refresh tampilan
    }
}

// 5. UPDATE: Fungsi edit sederhana (Prompt)
function editProduct(index) {
    const newName = prompt("Ganti Nama Produk:", products[index].name);
    const newPrice = prompt("Ganti Harga Produk:", products[index].price);

    if (newName && newPrice) {
        products[index].name = newName;
        products[index].price = parseInt(newPrice);
        renderProducts();
    }
}

// Jalankan render pertama kali
renderProducts();