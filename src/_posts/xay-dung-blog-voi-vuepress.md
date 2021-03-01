---
title: "Xây dựng blog cá nhân đảm bảo RẺ-ĐẸP-NHANH-BỀN.👍👍"
date: 03-01-2021
update: 03-01-2021
tags:
  - vuepress
  - personal-blog
  - vuepress-vuetify-theme
author: hoangpn
image: https://images.viblo.asia/a1d38ad6-b393-44b6-9efb-18eda9bdbbe4.png
showThumbnail: true
---

Hi các bạn, mình là Hoàng đây, vẫn làm mình sau 1 thời gian ăn no ngủ kĩ sau tết. Giờ ngoi lên xem công nghệ thế giới chuyển biến thế nào rồi

Chẳng là, mình có 1 con blog viết bằng Rails, nhưng vì nghèo, nên không có tiền chạy vps => Đã đến lúc phải làm điều gì đó cho đứa con tinh thần của mình rồi
Okay, let start :grinning::grinning:

Đầu tiên, đối với mình hiện tại, thì tiêu chí của mình đối với 1 con blog là

1. Chi phí chạy nó rẻ nhất có thể(~~dành cho bác nào nghèo như mình~~)
2. Tốc độ truy cập trang nhanh
3. Viết thêm một bài mới đơn giản

Ý nghĩ đầu tiên lóe lên trong đầu mình là **github pages**, vâng, github pages - Cái thứ mà ít nhất mỗi dev đều thử nó một lần, thấy được một cái trang web của mình làm ra nhanh chóng, tiện lợi thì đều rất thích thú mà :heart_eyes::heart_eyes:

Đối với thằng github pages thì thậm chí bạn chẳng phải mất tiền thuê vps hay hosting nữa, trang github pages của bạn sẽ bất tử(~~cho đến khi nào github bỏ tính năng này thì thôi~~ :) )

Ok đã xong được thằng **tiêu chí 1** rồi. Khổ nỗi, mình lại là thằng chúa lười(may mà vẫn có người yêu). Giờ nghĩ, lại code lại như con rails blog trước thì thôi cũng quá tôi => Nhanh trí nghĩ ngay ra dùng các theme mà github pages hỗ trợ. Việt Nam nói là làm, nhanh tay lấy ~~cuộn giấy~~ bàn phím gõ gõ vào việc ngay. Sau 1 hồi tìm kiếm thì thấy thằng github pages nó chỉ support luôn **Jekyll** thôi, mà mấy cái template của thằng này lại xấu xí quá trong khi đó tính mình yêu cái đẹp, thích màu hồng nên phải đi đường khác rồi.

![](https://images.viblo.asia/9cf35a73-ccde-429a-97ef-e9def1efeb30.png)

Tiếp tục công cuộc tìm với tiêu chí 2. Mình nghĩ ngay đến mấy cái static pages đang thịnh hành cho việc viết blog đơn giản. Nhanh tay, tìm ngay vài thằng cộm cán như sau

1. [HUGO](https://gohugo.io/)
2. [GatsbyJS](https://www.gatsbyjs.com/)
3. [Vuepress](https://vuepress.vuejs.org/)

Còn vài thanh niên nữa nhưng nổi lên nhất là 3 cháu này, xịn xò, theme thì không thiếu. Nhưng cá nhân mình lại là con nghiện của VueJS thế mới chết, nên đành ngậm ngùi chia tay 2 em _HUGO_ và _Gastby_ mà chọn **Vuepress** thôi. Nói thật ra là quen tay dùng VueJS nên có gì còn có thể kịp trở tay được :).

_Note: Bạn nào quen dùng react thì nên dùng [GatsbyJS](https://www.gatsbyjs.com/). Thằng này cũng khá xịn xò tay to các thứ các thứ đấy_

Qua quá trình tìm kiếm qua thằng bạn thân **google**, thì mình chốt được 2 cái

1. Dùng github pages
2. Dùng Vuepress

Loanh quanh 1 hồi thì đúng là vuepress không làm mình thất vọng, template của thằng này thì nói thật không thiếu, bạn chỉ cần chọn cái thích hợp với mình thôi. Việc còn lại để vuepress lo :joy::joy:

_Note: Các bạn có thể tham khảo thêm các_ [_theme của vuepress ở đây nhé_](https://github.com/vuepress/awesome-vuepress#community-themes)

Thêm nữa là việc viết 1 bài mới đối với những thằng kể trên là dùng **markdown** nhé, rất quen thuộc với mọi dev, và có thể tha hồ đăng bài ở các diễn đàn khác nhau(vì cơ bản giờ toàn dùng md để viết mà). Đối với bản thân mình thì khá dễ sử dụng :heart_eyes::heart_eyes:

Okay, bắt tay vào xây dưng blog của mình thoai nào(Sau khi đã chọn đươc vuepress làm điểm tựa :) )

1. Instal Vuepress
2. Chọn theme
3. Kiểm tra thành quả
4. Deploy to Github Pages
5. Setup Auto build
6. Các vấn đề khác

## Instal Vuepress

Các bạn cứ tham khảo [trang chủ](https://vuepress.vuejs.org/guide/#how-it-works) của nó là ra ngay ý mà

```js
// https://vuepress.vuejs.org/guide/getting-started.html#prerequisites

yarn create vuepress-site
```

![](https://images.viblo.asia/d3477cf6-4268-44c6-970d-c71f04c0b859.png)

OK chạy thử phát xem nó dư nào nào

```js
yarn install
yarn run dev
```

![](https://images.viblo.asia/264c0bfb-e9ac-4350-8702-a0ce16d2b5b6.png)
![](https://images.viblo.asia/fd0c3afe-aa7f-4b3e-a000-0e15a45be45a.png)

Kết quả luôn

![](https://images.viblo.asia/2c7c6bf2-b3c4-4b63-ba43-c6b115c03028.png)

Ra luôn, vâng ra luôn, rất nhanh ae ạ, nói chung là hịn hò

## Chọn theme

Mình là người yêu cái đẹp thích màu hồng, mình không hài lòng với cái theme mặc định này lắm, nghĩ bụng, phải làm sao để cho nó đẹp hơn thôi, chứ cứ thế này không được.

Mình là người Việt Nam, mà Việt Nam nói là làm, không chần chừ lên ngày [awesome-vuepress](https://github.com/vuepress/awesome-vuepress#community-themes) để kiếm theme cho em nó. Sau nhiều hồi lựa chọn giữa các em với nhau, mình đã chọn được 1 em khá vừa lòng là em [này ](https://github.com/ttskch/vuepress-theme-blog-vuetify/) - Và chính nó cũng thành blog của mình luôn :heart_eyes::heart_eyes::heart_eyes:

![](https://images.viblo.asia/a1d38ad6-b393-44b6-9efb-18eda9bdbbe4.png)

Chọn được rồi thì cài đặt thôi nhể :)
https://github.com/ttskch/vuepress-theme-blog-vuetify/

```js
$ yarn add --dev vuepress-theme-blog-vuetify

# or
$ npm install -D vuepress-theme-blog-vuetify
```

Sử dụng

```js
// .vuepress/config.js
module.exports = {
  theme: "blog-vuetify",
  themeConfig: {
    // ...
  },
};
```

Đơn giản như đan rổ, làm ngay và luôn

## Kiểm tra thành quả

Sau vài hồi config các thứ, run **_localhost:8080_** và mình đã có được cái blog như hiện tại trên kia kìa :)

## Deploy to Github Pages

Đến đây thì về cơ bản là đã xong rồi, làm thêm vài bước config nữa thôi

1. Tạo repo github, để public nhé(public mới vào việc với github pages được)
2. Push code lên thôi
3. Setting gh-pages

## Setup Auto build

Đến đây thì lại nảy sinh một vấn đề là, ơ thế code mình như này, github pages chơi thế éo nào được, nào là **md**, nào là **package.js** :)

=> Chúng ta cần phải build nó trước khi push lên github thôi. Mà vốn bản tính lười, chẳng nhẽ lần nào viết xong bài mới là lại build à, chán. Nghĩ ngay đến **github actions** => một công nghệ mà mới đây(~~chẳng qua lâu rồi mà mình không hay dùng~~) mới tích hợp vào github. Nhanh tay search ngay làm sao tự động build vuepress cho github pages. Ui xời, quả là trời không phụ lòng người, ra ngay được https://github.com/marketplace/actions/vuepress-deploy. Thôi là lại một nốt nhạc nữa :))

Test ngay cho nóng

![](https://images.viblo.asia/a8958a1b-fd28-48b5-8268-809c5896beb7.png)

Ngon luôn, bật ngay github pages check thôi, và thành quả đơn giản là https://hoangpn.com/

![](https://images.viblo.asia/a1d38ad6-b393-44b6-9efb-18eda9bdbbe4.png)

## Các vấn đề khác

Sơ sơ là thế, các bạn có thể nắm được và bắt tay xây dựng web được rồi. Tuy nhiên có 1 số lưu ý sau

#### Đối với việc setup token cho auto_deploy

```yml
name: Deploy to GH Pages
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Build and Deploy
        uses: jenkey2011/vuepress-deploy@dev
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          TARGET_REPO: hoangpn256/hoangpn.github.io
          TARGET_BRANCH: gh_pages
          BUILD_SCRIPT: yarn && yarn build
          BUILD_DIR: src/.vuepress/dist/
```

Để ý rằng có biến `secrets.ACCESS_TOKEN` -> đây là access token của tài khoản github của bạn. Để lấy được nó hãy làm theo hướng dẫn sau [đây](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)

#### Đối với việc chia thư mục viết bài

Các bạn có thể tham khảo cấu trúc và config ở [repo của mình](https://github.com/hoangpn256/hoangpn.github.io).

Lưu ý các bài viết sắp xếp theo phần `date`

![](https://images.viblo.asia/d22940cc-aacf-4034-bd1a-d82877b11c60.png)

#### Đối với vấn đề setup domain cho github pages

Thêm file CNAME vào phần public trong source code

![](https://images.viblo.asia/7f618ceb-598a-49d7-b044-977c9ca627c9.png)

Thêm CNAME nếu bạn dùng sub-domain của mình cho github pages, hoặc A-record nếu bạn dùng chính domain của mình cho gh-pages

Có thể tham khảo thêm tại [đây](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)

![](https://images.viblo.asia/54d70f6c-4af4-4186-98d6-aacd189517e0.png)

![](https://images.viblo.asia/fec49e62-7627-49dc-8d78-2cc659ed6ea2.png)

Trên đây là cấu hình của mình

## Kết

Okay, cơ bản thế là xong rồi đấy, chốt lại 1 số vấn đề như sau

1. Dùng vuepress để xây dựng blog
2. Dùng github pages để host đến chết :)
3. Dùng github actions để auto build
4. Một số cấu hình về github pages và config của dự án cần lưu ý(tham khảo repo của minh nhé - nhớ start nha :heart_eyes::heart_eyes: )

Nêu có bất kì thắc mắc gì cần giải đáp, hoặc góp ý cho mình, thì hãy comment ở dưới nhé. Cảm ơn các bạn đã đọc bài viết đến đây.

---

[@hoangpn](https://hoangpn.com/) - Better every day!
