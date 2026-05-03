@echo off
REM পোর্টফোলিও ডিপ্লয়মেন্ট স্ক্রিপ্ট উইন্ডোজের জন্য
REM এটি আপনার ওয়েবসাইট GitHub Pages-এ আপলোড করতে সাহায্য করবে

echo.
echo ========================================
echo    পোর্টফোলিও GitHub ডিপ্লয়মেন্ট
echo ========================================
echo.

REM Git ইনস্টল আছে কি না চেক কর
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: আপনার কম্পিউটারে Git ইন্সটল নেই!
    echo Git ডাউনলোড করুন: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [OK] Git ইন্সটল করা আছে
echo.

REM Git রেপোজিটরি ইনিশিয়ালাইজ কর
echo ধাপ ১: Git রেপোজিটরি তৈরি করা হচ্ছে...
git init
git add .
git commit -m "Initial portfolio upload"

if errorlevel 1 (
    echo ERROR: Git রেপোজিটরি তৈরি করা যায়নি!
    pause
    exit /b 1
)

echo [OK] রেপোজিটরি তৈরি হয়েছে
echo.

REM Git ব্যবহারকারীর তথ্য সেট কর
echo ধাপ ২: আপনার GitHub ব্যবহারকারীর নাম এবং ইমেইল দিন...
set /p github_username="আপনার GitHub username লিখুন: "
set /p github_email="আপনার GitHub email লিখুন: "

git config user.name "%github_username%"
git config user.email "%github_email%"

echo [OK] Git ব্যবহারকারী কনফিগার করা হয়েছে
echo.

REM রিমোট রেপো অ্যাড কর
echo ধাপ ৩: GitHub রিমোট রেপো যোগ করা হচ্ছে...
set /p repo_name="রিপোজিটরি নাম লিখুন (ডিফল্ট: %github_username%.github.io): "
if "%repo_name%"=="" set repo_name=%github_username%.github.io

git remote add origin https://github.com/%github_username%/%repo_name%.git
git branch -M main

echo.
echo ধাপ ৪: GitHub-এ পুশ করা হচ্ছে...
echo যখন পাসওয়ার্ড চাইবে, তখন আপনার GitHub Personal Access Token ব্যবহার করুন
echo টোকেন তৈরি করুন: https://github.com/settings/tokens
echo.

git push -u origin main

if errorlevel 1 (
    echo ERROR: GitHub-এ পুশ করা যায়নি! আপনার GitHub তথ্য পরীক্ষা করুন।
    echo.
    echo দ্রুত সমাধান:
    echo 1. নিশ্চিত করুন রেপোজিটরি আছে: https://github.com/%github_username%/%repo_name%
    echo 2. পাসওয়ার্ডের পরিবর্তে Personal Access Token ব্যবহার করুন
    echo 3. টোকেনের scope-এ 'repo' অনুমতি আছে কি দেখুন
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  সফল্য! আপনার পোর্টফোলিও GitHub-এ আপলোড হয়েছে!
echo ========================================
echo.
echo আপনার সাইট পাওয়া যাবে:
echo https://%repo_name%
echo.
echo পরবর্তী ধাপ:
echo 1. GitHub-এ যান এবং রেপোজিটরি সেটিংসে যান

echo 2. Pages সেকশনে যান

echo 3. Branch হিসেবে 'main' এবং Folder হিসেবে 'root' নির্বাচন করুন

echo 4. কয়েক মিনিট অপেক্ষা করুন সাইট লাইভ হতে

echo.
echo আপনার লগইন তথ্য:
echo   Email: almamunfire10@gmail.com
echo   Password: 12345678
echo.
pause
