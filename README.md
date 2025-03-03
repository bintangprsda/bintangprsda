
# Hi, I'm Bintang Persada! 👋

Welcome to my GitHub profile! I'm a passionate software developer focused on building amazing web applications with modern technologies like **React**, **Next.js**, and **TypeScript**. I love creating clean, efficient code and learning new things every day. 

## 🔧 Technologies & Tools

- **Frontend:** React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, SASS, Bootstrap
- **Backend:** Node.js, Express, Firebase, MongoDB
- **Version Control:** Git, GitHub, GitLab
- **Deployment:** Vercel, Netlify, Heroku
- **Other Tools:** Docker, Postman, Jest, Cypress

## 🧑‍💻 My Projects

Here are some of the projects I've worked on recently:

# 🚀 atlasPro - Blood Glucose Monitoring System

**atlasPro** adalah aplikasi monitoring gula darah berbasis web yang dirancang khusus untuk kebutuhan laboratorium rumah sakit. Aplikasi ini mendukung pencatatan hasil pemeriksaan gula darah pasien, manajemen permintaan stok ke laboratorium, serta menyediakan dashboard real-time untuk pemantauan di bangsal dan laboratorium.

## 📊 Tech Stack
- **Frontend:** Next.js (App Router), React 19, TypeScript
- **UI Components:** shadcn/ui, TailwindCSS, Lucide React Icons
- **Backend:** Firebase Firestore, Firebase Authentication, Firebase Cloud Messaging (FCM)
- **Utilities:** date-fns, react-chartjs-2, papaparse, pdf-lib

---

## ✨ Features

### ✅ Authentication & Role Management
- Login via **Firebase Authentication**.
- Redirect otomatis sesuai role: **Admin** atau **Staff Bangsal**.
- Data user mencakup: `fullName`, `unit`, `ward`.

### ✅ Ward Station Management
- Admin dapat menambah, mengedit, dan menghapus data **ward station** (bangsal).

### ✅ Real-time Blood Glucose Records
- Pencatatan hasil gula darah per pasien.
- Auto-fill nama pasien & tanggal lahir berdasarkan nomor rekam medis (MR Number).
- Jika data pasien tidak ditemukan, sistem mendukung input manual sekaligus menyimpan data pasien baru.
- Semua data langsung update di Firestore dan terpantau di dashboard Admin.

### ✅ Stock Request System
- Staff bangsal dapat mengirim permintaan stok gula darah ke laboratorium.
- Item default yang selalu tersedia: **Safety Lancet** (50 pcs per request).
- Permintaan otomatis muncul di dashboard laboratorium dan mengirim **notifikasi FCM** ke akun Admin.

### ✅ Real-time Dashboard & Monitoring
- Grafik pemakaian gula darah harian dan mingguan.
- Tabel histori lengkap pencatatan per pasien dan permintaan stok.
- Semua data update otomatis tanpa refresh berkat **Firestore Realtime Snapshots**.

### ✅ Notifications
- **FCM Notifications** otomatis dikirim ke Admin laboratorium saat ada permintaan stok baru.

### ✅ Export Reports
- Export data histori ke **PDF** dan **Excel**.
- Tersedia filter by tanggal dan ward station.

### ✅ Mobile Responsive
- Desain menggunakan **shadcn/ui** dengan warna tema standar.
- Full responsive untuk desktop, tablet, dan mobile.

---

## 📂 Project Structure


### 📦 [Project Name](GitHub-Link)
Another project description here.

- **Tech Stack:** Next.js, Firebase, TypeScript
- **Features:**
  - Feature 1
  - Feature 2

## 🎯 Currently Learning

- Improving my **GraphQL** skills
- Deep diving into **Serverless Architectures**
- Exploring **Web3** development


## 🌱 Let's Connect

- [LinkedIn](your-linkedin-url)
- [Twitter](your-twitter-url)
- [Portfolio](your-portfolio-url)

Feel free to reach out if you'd like to collaborate on projects or just chat about tech!

---

### Additional Tips to Enhance Your Profile:

1. **Personalize It:** Add a personal touch to your profile by introducing yourself and your goals.
2. **Project Showcase:** Include a few of your most exciting or significant projects with descriptions, links, and tech stacks used.
3. **GitHub Stats:** Show off your GitHub stats (total contributions, top languages, etc.) using a service like [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats).
4. **Badges:** Add tech-related badges like "React", "TypeScript", etc., to visually represent your skills.
5. **Profile Picture:** Make sure you have a good profile picture to make it more personal and professional.

By adding these sections and keeping your profile updated, you'll have a great GitHub profile that represents your work and achievements!
