
# Struktur Folder

```
src/
  |_layouts/
  |_pages/
  App.jsx
  index.css
  main.jsx
```

# Cara Runningnya

1. git clone 
2. cd ke root folder
3. npm install
4. npm run dev

---

# Spesification API


## A. Authentication (Sudah)

### 1. Login

- method : **POST**
- endpoint : **/auth/login**
- request :

```json
{
  
}
```

- response :

```json
{

}
```


### 2. Register

- method : **POST**
- endpoint : **/auth/register**
- request :

```json
{
  "name" : "ulfi jakarta",
  "email" : "ulfijakselbanget@gmail.com",
  "gender" : "perempuan",
  "password" : "jakselniboss"
}
```

- response :

```json
{
  "status" : "success",
  "message" : "Register berhasil disimpan",
  "data" : {
    "name" : "ulfi jakarta",
    "email" : "ulfijakselbanget@gmail.com",
    "gender" : "perempuan",
    "token" : "token_jwt_ya_ini_contoh_aja"
  }
}
```

### 3. Logout

- method : **POST**
- endpoint : **/auth/logout**
- headers : **Bearer Token_harus_login_atau_register_dulu**

> pastikan token jwt nya ada playload 
> { user_id : 1 } sebagai syarat untuk logout

- response :

```json
{
  "status" : "success",
  "message" : "Logout berhasil",
  "data" : []
}
```

## B. Survey

### 1. Submit Survey

- method : **POST**
- endpoint : **/survey**
- request :

```json
{

}
```

- response :

```json
{

}
```

### 2. Get All Survey

- method : **GET**
- endpoint : **/survey**
- request :

```json
{

}
```

- response :

```json
{

}
```


## C Recomendations

### C.1 Destinations

### 1. get Destinations by user_id 

- method : **GET**
- endpoint : **/destinations/?user_id=1** 
- response :

```json
{
  "status" : "success",
  "message" : "Destination berhasil ditampilkan",
  "data" : [
    {
      "id" : 1,
      "name" : "gunung kidul",
      "url_gambar" : "url_gambar",
      "url_maps" : "url_maps",
      "provinsi" : "jawa tengah",
    },
    {
      "id" : 2,
      "name" : "gunung kidul",
      "url_gambar" : "url_gambar",
      "url_maps" : "url_maps",
      "provinsi" : "jawa tengah",
    },
    {
      "id" : 3,
      "name" : "gunung kidul",
      "url_gambar" : "url_gambar",
      "url_maps" : "url_maps",
      "provinsi" : "jawa tengah",
    },
    {
      "id" : 4,
      "name" : "gunung kidul",
      "url_gambar" : "url_gambar",
      "url_maps" : "url_maps",
      "provinsi" : "jawa tengah",
    }
  ]
}
```
> pastikan provinsi sesuai dengan hasil rekomendasi

### 2. Details Destinations by id

- method : **GET**
- endpoint : **/destinations/?id=1**
- response :

```json
{
  "status" : "success",
  "message" : "Destination berhasil ditampilkan",
  "data" : { 
    "destinasi" : {
      "id" : 1,
      "name" : "gunung kidul",
      "url_gambar" : "url_gambar",
      "url_maps" : "url_maps",
      "provinsi" : "jawa tengah",
    },
    "list_kuliner" : [
      {
        "id" : 4,
        "judul" : "Pecel gunung kidul",
        "deskripsi" : "deskripsi panjang",
        "gambar" : "url_gambar",
        "provinsi" : "jawa tengah",
      },
      {
        "id" : 4,
        "judul" : "Pecel gunung kidul",
        "deskripsi" : "deskripsi panjang",
        "gambar" : "url_gambar",
        "provinsi" : "jawa tengah",
      },
      {
        "id" : 4,
        "judul" : "Pecel gunung kidul",
        "deskripsi" : "deskripsi panjang",
        "gambar" : "url_gambar",
        "provinsi" : "jawa tengah",
      },
      {
        "id" : 4,
        "judul" : "Pecel gunung kidul",
        "deskripsi" : "deskripsi panjang",
        "gambar" : "url_gambar",
        "provinsi" : "jawa tengah",
      }
    ]
  }
}
```

## D. Kuliners

### 1. Details Kuliners by id

- method : **GET**
- endpoint : **/kuliners/?id=1**ss
- request :

```json
{
  
}
```

- response :

```json
{

}
```


