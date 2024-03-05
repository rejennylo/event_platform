<div align="center">
 <br />
    <a href="https://event-platform-peach-delta.vercel.app/" target="_blank">
      <img src="./public/screenshot.png" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">Evently</h3>

  <div align="center">Next 14 全端應用程式</div>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

Event 是一個基於 Next.js 14 開發的 Full Stack 專案，你可以在上面隨意發起或找尋所想要的活動，下階段將更新購票與金流系統。

在瀏覽器輸入 [https://event-platform-peach-delta.vercel.app/](https://event-platform-peach-delta.vercel.app/) 查看 Evently，可使用下方帳號登入

**測試帳號：** iamaguest9319@gmail.com
**測試密碼：** 測試密碼：Aa000456

## <a name="tech-stack">Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Zod
- React Hook Form
- Shadcn
- uploadthing

## <a name="features">Features</a>

**會員系統 (CRUD)：**透過 Clerk 進行使用者管理與身分驗證

**Events (CRUD)：**使用者擁有完整的創建、讀取、更新及刪除 Event 權限

- **Create Events：**使用者可以產生 Event 標題、描述、起訖日期、位置、URL 等資訊
- **Read Events：**訪客與使用者皆可以存取所有 Event 的詳細資訊
- **Update Events：**使用者可以動態修改 Event 的詳細資訊，確保資訊準確性
- **Delete Events：**一鍵輕鬆刪除 Event，使平台管理更便利

**Events 關聯：**在詳細資訊中能展示關聯 Event

**搜尋與篩選：**可用關鍵字或類別來篩選想要的 Event

**新增類別：**可以創建新的類別標籤，以便篩選

## <a name="quick-start">Quick Start</a>

請按照下方的步驟執行

**Prerequisites**

請確保你的電腦已安裝下列軟體：

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

使用 npm 安裝依賴項：

```bash
npm install
```

**Set Up Environment Variables**

在專案根目錄中新增 `.env` 檔，並輸入以下內容：

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

將 placeholder values 更換成你的憑證

**Running the Project**

```bash
npm start
```

在瀏覽器中輸入 [http://localhost:3000](http://localhost:3000) 查看本機項目
