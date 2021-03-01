---
title: "Pair Programing  - Một trong những kỹ thuật phát triển phần mềm thượng thừa nên biết.👍"
date: 04-12-2020
update: 03-01-2020
tags:
  - pair
  - pair-programing
  - agile
author: hoangpn
image: https://images.viblo.asia/866eadd9-7410-4bfd-89a9-5648768b3ca9.png
showThumbnail: true
---

Chào các bạn, mình là Hoàng đây, hôm này chúng ta quay trở lại với một chủ đề khá hay mà không phải ai cũng biết. Một chủ đề không liên quan tới code, nhưng lại giúp trình độ của các bạn phát triển. :hugs::hugs::hugs:

Không quá dài dòng nữa, đấy là **pair programing**

## Nội dung

Cùng theo tôi trả lời những câu hỏi sau, để bạn có thể hiểu được cái gì là **pair programing** nhé

1. Pair programing là gì?
2. Pair programing có thể làm được những gì?
3. Cách thực hiện của pair programing
4. Khi nào thì dùng, và một số điểm lưu ý
5. Kết luận, ý kiến của bản thân mình.

---

## Pair programing là gì ?

![](https://images.viblo.asia/0b6456fc-b562-4e33-961c-eebc0bcda35f.png)

Pair programing hay còn được gọi là pairing, programing in pair về cơ bản là một kỹ thuật phát triển phần mềm. Thường được thấy là việc 2 cá nhân cùng làm 1 task trên cùng một máy tính.

Cũng từ đó có 2 vai trò tương ứng là **Driver** và **Navigator**, Driver có trách nhiệm viết code, trong khi công việc của navigator là theo dõi driver, đưa ra lời khuyên và cố gắng hiểu và truyền đạt được bức tranh tổng thể của task đó cho driver. Hai vai trò này **có thể được hoán đổi cho nhau** trong khoảng thời gian thường xuyên.

## Pair programing làm được gì? (ích lợi)

Theo cá nhân tôi, lợi ích được chia cho 2 đối tượng là **Con người** và **Dự án**

### Con người

- **Cải thiện vấn đề teamwork**. Khi pair code, chúng ta **nên**, hay nói nặng nề hơn là **cần trao đổi với nhau**. Việc này thực sự giúp cho các member hiểu nhau hơn, từ đó vấn đề teamwork cũng được nâng cao.
- **Trau dỗi kĩ năng của mỗi người tốt hơn**. Khi pair code, chúng ta sẽ có được góc nhìn khác nhau từ 2 người, cũng như các kiến thức, kĩ thuật khác nhau để trao đổi. Đặc biết là nếu bạn được một người có trình độ cao hơn pair code cùng. => **Kĩ năng của cả team cùng được phát triển lên.**
- Độ **tập trung**, sự **tự tin** và **độ hài lòng** của các thành viên được cải thiện rất nhiều. Chúng ta có thể thấy rằng, nếu có người pair code cùng thì chúng ta sẽ ít xao nhãng hơn, ít check fb, instagram hơn , .. vì chúng ta không muốn làm **_người đồng hành_** của mình thất vọng do đó độ tập trung chắc chắn sẽ cải thiện rõ ràng. Và việc được code cùng với người khác như thế, có thể làm cho bạn thấy thú vị hơn, vui vẻ hơn => giúp cải thiện độ hài lòng của mình tốt hơn. Và bạn sẽ dần dần tự tin hơn vào bản thân cũng như kiến thức của mình có.
- Tăng cường **khả năng giải quyết vấn đề**. Bạn đã bao giờ nghe đến kĩ thuật **Rubber Ducking** - giải thích cho con vịt hiểu code của mình chưa. Khi pair code, chúng ta cần giải thích code của mình cho người đồng hành hiểu được. Việc này cũng mang lại kết quả tưởng tự như **Rubber Ducking** => giúp bạn hiểu rõ và có thể sẽ ra được cách giải quyết vấn đề mà chính bạn không ngờ tới đấy :)

### Dự án

- Chất lượng **code của dự án được nâng cao hơn**( code ít bug hơn, unit test phủ kín hơn, code clean hơn). Vì sao lại thế? Đơn giản thôi, 2 cái đầu thì sẽ thường hơn 1 cái đầu. Khi pair code với nhau, chúng ta có thể dễ dàng phát hiện ra những sai sót của nhau, hay đưa ra cách giải quyết vấn đề tốt hơn, ...
- **Thời gian giải quyết công việc tốt hơn**. Hơi lạ nhỉ, thường thì mỗi người 1 việc sẽ nhanh hơn 2 người 1 việc chứ nhỉ. Nhưng trên thực tế cho thấy, đối với pair programing giúp giải quyết công việc nhanh hơn. Đối với một task khó, thì việc có 2 người cùng suy nghĩ sẽ nhanh hơn rất nhiều đối với một người.
- Khi pair code, chúng ta sẽ **hiểu dự án kĩ càng hơn**, việc này rất quan trọng, nó giúp cho dự án sẽ **phát triển nhanh hơn đáng kể đấy**.

=> Từ những điều trên, chúng ta có thể kết luận ở đây rằng, pair programing giúp cho dự án **hoạt động tốt hơn, tiết kiệm thời gian, chi phí**.

## Cách thực hiện của pair programing?

Chúng ta có thể phân chia làm 2 loại là **Trình độ** và **Kiểu**

### Trình độ

1. **Người có kinh nghiệm cao hơn - người có kinh nghiệm ít hơn** (có thể hiểu như là senior - junior, junior - fresher, ...).
   Đây dường như là sự kết hợp tuyệt với để tăng tốc độ học tập cho các bạn có level thấp hơn. Cũng là cách tốt để chia sẻ kinh nghiệm trong toàn team, **nhưng hãy để ý đến sự cân bằng**, Ví dụ pair giữa junior-senior, nếu không tốt thì junior chỉ là **người xem** cho đến hết task :) Chẳng tiếp thu được gì cả. Hay senior có thể cảm thấy khó chịu khi tốc độ của mình bị chậm đi khi cứ phải giải thích với junior chẳng hạn.

2. **Người có trình độ level tương đương nhau** (có thể hiểu là junior - junior, ...). Sự kết hơp này cũng cải thiện đáng kể năng suất và chất lương. Vì trình độ tương đương nhau, nhưng có cái người này biết, người kia không biết, ....

### Kiểu

**Driver-navigator** là kiểu thường được thấy nhất, cả 2 đổi vai trò cho nhau => để output là một kết quả tốt nhất. Nhưng cũng gặp phải một số khó khăn như sau

- **Driver** tập trung code, và **navigator** không muốn làm phiền
- Hoặc khi driver bảo **_"đợi tí nhé"_** => Nagivator sẽ rảnh và khả năng cao là cũng bị xao nhãng bởi việc check fb, instagram, ....

Nói chung, để pair programing thành công được, thì mấu chốt là sự **tôn trọng nhau**, và **giao tiếp** của 2 người. Đáng tiếc là điều này thường khó thực hiện đối với các cặp mới.

Từ đó sinh ra một số kĩ thuật khác mà bản thân tôi cho rằng nên bắt đầu từ đó đối với các cặp mới như sau

**Strong & Traditional Pairing Techniques**

![](https://images.viblo.asia/4226ca44-0f3b-4ada-a2aa-961a80240d38.jpeg)

Kim chỉ nam của kỹ thuật này là **"Driver sẽ không làm gì cho đến khi có sự hướng dẫn của navigator"**

Bất cứ khi nào driver yêu cầu navigator giải thích về ý tưởng, thì navigator cần phải giải thích rõ ràng về việc đó, và sau đó thì đơn giản là quay về vị trí quan sát.

**Ping-Pong Pairing**

![](https://images.viblo.asia/fc2b39d1-2eba-4d62-b61d-43645b53f645.jpeg)

Kỹ thuật này thường được sử dụng khi xử lý unit test. Bắt đầu bằng việc người đầu tiên viết 1 test fail, và chuyển giao nó cho người thứ 2, người thứ 2 sẽ phải hoàn thành test fail đó, đồng thời viết thêm 1 test fail khác và chuyển giao lại cho nguời thứ 1. Cứ lặp lại cho đến khi coverage được phủ hết.

## Khi nào thì dùng, và một số điểm lưu ý

### Khi nào thì dùng?

Theo bản thân tôi thấy thì chúng ta sẽ dùng pair programing trong những trường hợp sau:

- Khi có 1 task phực tạp, hoặc một PR quá lớn.
- Khi coaching
- Khi fixing
- Hoặc đơn giản là muốn nâng cao trình độ các member trong team lên.

Túm đoạn này lại, **hãy tìm thời điểm thích hợp để sử dụng**, bắt đầu bằng **thời điểm gợi ý như trên**. Khi bạn đã có kinh nghiệm về vấn đề này rồi, thì đừng ngần ngại đề xuất sử dụng nó khi cần thiết nhé.

### Những lưu ý?

- Công bằng, hãy nhớ vai trò của 2 người là như nhau.
- Hạ cái tôi xuống, tôn trọng nhau và tiếp thu ý kiến của đối phương.
- Hãy tin tưởng **bạn đồng hành** của mình.
- Đừng ép buộc
- Cho đối tác của bạn có cơ hội để "lái" vào đúng thời điểm
- Khuyến khích việc giao tiếp cởi mở.
- Đừng bỏ qua những khoảng nghỉ ngơi
- Xác định những sai lầm của bạn
- Nhận lỗi trước
- Bình tĩnh lại, đừng vội vàng

**Trong khi paring**, chúng ta có một số **điểm** sau cần chú ý

- Để tôi code cho
- Bạn có thể giúp tôi ?
- Cùng quẩy thôi
- Tôi định làm theo hướng như này, bạn nghĩ sao về nó ?
- Bạn có hướng giải quyết nào không ?
- Đoạn code này chạy thế nào đấy, viết unit test nhé.
- Tôi không hiểu ý bạn lắm, bạn có thể giải thích rõ hơn không ?
- Heeyyy, chúng ta có quên điều gì không nhỉ ?

**Take a break**

- Chúng ta nghỉ chút nhỉ
- Hey, tôi nghĩ nên đổi vai trò chút
- Yoo, ra làm cốc cafe đi.

## Kết luận, ý kiến của bản thân mình.

Trên thực tế, pairing đã mang lại rất nhiều lợi ích. Vì thế lợi ích của paring là không thể phủ nhận được.

Nhưng, liệu rằng **pair programing** có phù hợp với tất cả mọi người không? Thực sự câu trả lời không đơn giản cho vấn đề này. Tất cả chúng ta khác nhau, vì vậy chắc chắn sẽ có những kết quả khác nhau., Pair programing rất hiệu quả với một số người, nhưng một số người thì không.

Hãy nhớ rằng, pair programing không phù hợp với mọi dự án

Theo quan điểm của tôi thì bản thân phương pháp nào cũng vậy, không có xấu tốt gì cả, chỉ đơn giản là nó có phù hợp trong thời điểm đó hay không thôi. Pair programing cũng vậy. Nhưng nên nhớ rằng, **nếu không thử, thì sao biết được đúng không** ?

---

Cuối cùng, cảm ơn bạn đã đọc đến cuối. Bất kỳ ý kiển gì hãy comment ở dưới nhé. :point_down::point_down::point_down:

Hãy ủng hộ mình bằng upvote. để mình có thể cải thiện và đưa ra những bài mới tốt hơn nhé.

---

[@hoangpn](https://hoangpn.com/) - Better every day!
