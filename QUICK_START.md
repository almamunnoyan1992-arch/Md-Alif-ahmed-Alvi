# 🎯 আপনার সাইট লাইভ করার দ্রুত পথ

## ✅ আপনার পাসওয়ার্ড আপডেট হয়েছে

**নতুন লগইন তথ্য:**
- ইমেইল: almamunfire10@gmail.com
- পাসওয়ার্ড: **12345678**

---

## 🚀 সবচেয়ে সহজ উপায় (Netlify)

**মাত্র 2 মিনিটে লাইভ করুন!**

### ধাপ ১: GitHub অ্যাকাউন্ট তৈরি করুন
https://github.com/signup

### ধাপ ২: আপনার ফাইলগুলি GitHub-এ আপলোড করুন

**অপশন A: দ্রুত স্ক্রিপ্ট ব্যবহার করুন**
1. `D:\Alif\deploy.bat` ডাবল-ক্লিক করুন
2. আপনার GitHub ইউজারনেম এবং ইমেইল লিখুন
3. Personal Access Token প্রদান করুন

**অপশন B: ম্যানুয়ালি করুন**
```bash
cd D:\Alif
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### ধাপ ৩: Netlify ডিপ্লয় করুন
1. https://app.netlify.com এ যান
2. GitHub দিয়ে লগইন করুন
3. **Import from Git** ক্লিক করুন
4. আপনার **portfolio** রিপোজিটরি নির্বাচন করুন
5. **Deploy site** ক্লিক করুন

**তাৎক্ষণিক লাইভ লিংক পাবেন!** ✨

---

## 📋 অন্যান্য বিকল্প

### GitHub Pages (সম্পূর্ণ বিনামূল্যে)
- লাইভ URL: `https://yourusername.github.io/portfolio`
- সেটআপ সময়: 5-10 মিনিট
- বিস্তারিত গাইড: `DEPLOYMENT_GUIDE_BENGALI.md`

### Vercel (দ্রুততম)
- সেটআপ সময়: 3 মিনিট
- বিনামূল্যে কাস্টম ডোমেইন
- লাইভ URL: `https://portfolio-yourname.vercel.app`

---

## 📝 ফাইলগুলি যা আপনি পাবেন

| ফাইল | উদ্দেশ্য |
|------|---------|
| **index.html** | আপনার পোর্টফোলিও হোম |
| **login.html** | অ্যাডমিন লগইন |
| **dashboard.html** | প্রোফাইল এবং মিডিয়া ম্যানেজমেন্ট |
| **gallery.html** | পাবলিক গ্যালারি (ডাউনলোড সমর্থন) |
| **styles.css** | সম্পূর্ণ স্টাইলিং |
| **script.js** | সব ফাংশনালিটি |
| **deploy.bat** | স্বয়ংক্রিয় ডিপ্লয়মেন্ট স্ক্রিপ্ট |
| **DEPLOYMENT_GUIDE_BENGALI.md** | বিস্তারিত ডিপ্লয়মেন্ট গাইড |

---

## 💡 দ্রুত টিপস

### ১. GitHub Personal Access Token পান
1. GitHub Settings → Developer settings → Personal access tokens
2. "Generate new token" ক্লিক করুন
3. "repo" স্কোপ চেক করুন
4. Generate এবং কপি করুন

### ২. স্বয়ংক্রিয় ডিপ্লয়মেন্ট
একবার সাইট লাইভ হলে, পরবর্তী আপডেটের জন্য:
```bash
git add .
git commit -m "Updated profile"
git push
```

### ৩. ড্যাশবোর্ড অ্যাক্সেস করুন
- আপনার লাইভ সাইটে যান
- "Admin" বাটনে ক্লিক করুন
- নতুন পাসওয়ার্ড দিয়ে লগইন করুন: `12345678`

---

## 🎯 আপনার লক্ষ্য

✅ পাসওয়ার্ড পরিবর্তন করা হয়েছে  
⏳ সাইট লাইভ করা (পরবর্তী ধাপ)  
⏳ প্রোফাইল, ছবি এবং ভিডিও আপডেট করা

---

## ❓ কোনো প্রশ্ন থাকলে

**সাধারণ সমস্যা:**

| সমস্যা | সমাধান |
|--------|--------|
| Git কমান্ড কাজ করছে না | Git পুনরায় ইনস্টল করুন |
| Push ব্যর্থ হচ্ছে | Personal Access Token ব্যবহার করুন (পাসওয়ার্ড নয়) |
| সাইট 404 দেখাচ্ছে | GitHub Pages সক্ষম করুন (Settings → Pages) |
| ড্যাশবোর্ড কাজ করছে না | ব্রাউজার ক্যাশ পরিষ্কার করুন (Ctrl+Shift+Del) |

---

**শুভকামনা! আপনার সাইট শীঘ্রই লাইভ হবে! 🚀**
