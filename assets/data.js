/* Dữ liệu demo — lấy từ hieuungsukien.com (13/11/2026), đã làm gọn để hiển thị. */
const U = "https://hieuungsukien.com/wp-content/uploads/";

window.NS = {
  contact: {
    hotline: "0902 825 871", hotlineTel: "0902825871",
    zalo: "0972 648 550", zaloUrl: "https://zalo.me/0972648550",
    email: "newstareffect@gmail.com",
    company: "Công ty TNHH Thương mại và Dịch vụ Phát triển Newstar",
    address: "80 Tân Thới Nhì 16, ấp Tân Lập, xã Tân Thới Nhì, Hóc Môn, TP. Hồ Chí Minh"
  },

  families: [
    { id: "khong-khi", name: "Không khí huyền ảo", desc: "Phủ sân khấu bằng khói, tuyết hay bong bóng để mở màn nhẹ nhàng và lãng mạn." },
    { id: "bung-no", name: "Bùng nổ & lửa", desc: "CO2, lửa, pháo sân khấu cho đoạn drop, màn xuất hiện hay khoảnh khắc công bố." },
    { id: "an-mung", name: "Ăn mừng", desc: "Giấy màu và kim tuyến bay khắp khán phòng cho lúc cắt băng, chúc mừng, kết thúc chương trình." },
    { id: "canh-quan", name: "Cảnh quan sân khấu", desc: "Màn sao, màn mưa, thác pháo tạo bối cảnh cho cả tiết mục, không chỉ một khoảnh khắc." },
    { id: "thiet-ke-rieng", name: "Thiết kế riêng", desc: "Kết hợp nhiều hiệu ứng theo kịch bản, lập trình chạy đúng nhịp âm thanh và ánh sáng." }
  ],

  /* 15 hiệu ứng. old = đường dẫn trang cũ để chuyển hướng 301 khi lên web mới */
  effects: [
    { s: "khoi-lanh", fam: "khong-khi", name: "Khói lạnh sân khấu", old: "dich-vu/hieu-ung-khoi-lanh-san-khau11",
      short: "Lớp khói trắng là là sát sàn, làm nổi tia sáng và tạo cảm giác nhân vật bước ra từ mây.",
      best: ["Tiệc cưới", "Ca nhạc", "Thời trang", "Lễ vinh danh"],
      how: ["Dùng CO2 hoặc nitơ lỏng, khói nặng nên nằm sát sàn và tan nhanh", "Có thể phun theo bình hoặc chạy theo từng bài nhạc", "Mật độ khói được căn để không che mặt nghệ sĩ"],
      specs: [["Kiểu phun", "Theo bình hoặc theo bài"], ["Phù hợp", "Trong nhà, sân khấu có mái"]],
      img: U+"2019/11/khoi-lanh_3.jpg", gallery: [U+"2017/12/khoi-lanh-13-e1746411618673-1.jpg", U+"2019/10/khoi-lanh-sk.jpg"], prod: ["may-phun-khoi-lanh"] },
    { s: "tao-tuyet", fam: "khong-khi", name: "Tuyết rơi", old: "dich-vu/hieu-ung-tao-tuyet",
      short: "Những bông tuyết trắng bay chậm trong ánh đèn, hợp với màn kết lãng mạn hoặc chương trình Giáng sinh.",
      best: ["Giáng sinh", "Tiệc cưới", "Sự kiện thiếu nhi", "Màn kết"],
      how: ["Máy tạo tuyết dùng dung dịch chuyên dụng, không làm ướt sàn", "Máy lớn phun xa 4–20 m cho sân khấu rộng", "Điều khiển từ xa để bật đúng lúc"],
      specs: [["Tầm phun", "4 – 20 m (máy lớn)"], ["Phù hợp", "Trong nhà và ngoài trời ít gió"]],
      img: U+"2017/11/hieu-ung-tuyet-roi-6-1.jpg", gallery: [U+"2019/11/hieu-ung-tao-tuyet-7.jpg"], prod: ["may-tao-tuyet"] },
    { s: "bong-bong", fam: "khong-khi", name: "Thổi bong bóng", old: "dich-vu/hieu-ung-phut-bong-bong",
      short: "Hàng nghìn bong bóng trong suốt bay khắp không gian, vui mắt và chi phí nhẹ.",
      best: ["Sự kiện thiếu nhi", "Tiệc cưới", "Chụp ảnh", "Khai trương"],
      how: ["Máy nhỏ cho tiệc, máy lớn cho không gian rộng", "Dung dịch đậm đặc giúp bong bóng giữ lâu", "Đặt máy ở vị trí cao để bong bóng phủ đều"],
      specs: [["Tầm thổi", "4 – 6 m (máy lớn)"], ["Công suất", "100 – 2000 W"]],
      img: U+"2017/12/hieu-ung-bong-bong-re-dep-42-e1746341978134-2.jpg", gallery: [U+"2018/02/hieu-ung-bong-bong-re-dep-33-1-e1746347954774.jpg"], prod: ["may-thoi-bong-bong"] },
    { s: "man-mua", fam: "canh-quan", name: "Màn mưa, thác nước", old: "dich-vu/hieu-ung-man-mua-thac-nuoc",
      short: "Màn mưa hoặc thác nước trên sân khấu, sạch sẽ và an toàn, tạo bối cảnh khác biệt cho tiết mục.",
      best: ["Ca nhạc", "Múa", "Ra mắt sản phẩm"],
      how: ["Hệ thống tuần hoàn nước kín, không làm ướt khán phòng", "Thiết kế theo kích thước sân khấu", "Kết hợp ánh sáng để tạo hình ảnh"],
      specs: [["Lắp đặt", "Theo thiết kế sân khấu"]],
      img: U+"2025/05/hieu-ung-man-mua-san-khau-5-1.jpg", gallery: [U+"2025/05/hieu-ung-man-mua-san-khau.jpg"], prod: [] },

    { s: "cot-khoi-co2", fam: "bung-no", name: "Cột khói CO2", old: "dich-vu/hieu-ung-cot-khoi-co2",
      short: "Cột khói trắng phụt thẳng lên trời đúng nhịp nhạc, tạo cú hích thị giác ở khoảnh khắc cao trào.",
      best: ["Concert", "EDM", "Lễ hội", "Ra mắt thương hiệu", "Mở màn"],
      how: ["Khí CO2 không cháy, tự tan nhanh trong không khí", "Chọn độ cao 2–5 m, 5–8 m hoặc 8–12 m theo sân khấu", "Điều khiển DMX để chạy đồng bộ với âm thanh, ánh sáng"],
      specs: [["Độ cao cột khói", "2 – 12 m"], ["Điều khiển", "DMX512 hoặc từ xa"], ["Phù hợp", "Thay thế phun lửa ở nơi cấm lửa"]],
      img: U+"2019/11/phun-khoi.jpg", gallery: [U+"2022/05/admin-ajax-1.jpg", U+"2019/11/may-thua-thap.jpg"], prod: ["may-phun-cot-khoi-co2", "sung-co2"] },
    { s: "phun-lua", fam: "bung-no", name: "Phun lửa", old: "dich-vu/hieu-ung-phun-lua",
      short: "Cột lửa cao bùng lên từ sân khấu, cảm giác nóng rực truyền tới tận hàng ghế cuối.",
      best: ["Concert", "EDM", "Lễ hội ngoài trời", "Thể thao"],
      how: ["Máy phun lửa dùng gas, cao 8–10 m tùy dòng máy", "Điều khiển DMX, có cơ chế an toàn ngắt khẩn cấp", "Bố trí khoảng cách an toàn với nghệ sĩ và khán giả"],
      specs: [["Chiều cao lửa", "8 – 10 m"], ["Điều khiển", "DMX"], ["Phù hợp", "Sân khấu lớn, ngoài trời"]],
      img: U+"2022/05/z6604492295270_260099924544513372b7d85f0c056100.jpg", gallery: [U+"2018/03/hieu_ung_may_lua.jpg"], prod: ["may-phun-lua"] },
    { s: "phao-1-giay", fam: "bung-no", name: "Pháo bùm 1 giây", old: "dich-vu/hieu-ung-phao-bum-1-giay",
      short: "Một quầng sáng phụt lên rồi vụt tắt trong 1 giây, tạo điểm nhấn bất ngờ cho từng nhịp.",
      best: ["Ca nhạc", "Lễ trao giải", "Khoảnh khắc công bố"],
      how: ["Kích hoạt bằng điện, bắn đồng loạt hoặc lần lượt", "Chiều cao phun lên đến 9 m", "Phù hợp cả trong nhà có trần cao"],
      specs: [["Chiều cao", "đến 9 m"], ["Thời gian", "1 giây"]],
      img: U+"2019/11/phao-phut-1s-cao-10m-1.jpg", gallery: [U+"2019/11/thumsnail_0004-800x356-1.jpg"], prod: ["phao-dien"] },
    { s: "phao-30s", fam: "bung-no", name: "Pháo lửa lạnh 30 giây", old: "dich-vu/hieu-ung-phao-lua-phao-30s",
      short: "Cột tia sáng lấp lánh kéo dài 25–30 giây, đẹp cho màn chào cô dâu chú rể hay sinh nhật.",
      best: ["Tiệc cưới", "Sinh nhật", "Ca nhạc", "Khai trương"],
      how: ["Máy phun 30s dùng hạt zirconium và titan", "Tia sáng cao 1–4 m, không gây tiếng nổ", "Dùng được trong nhà hàng, hội trường"],
      specs: [["Chiều cao tia", "1 – 4 m"], ["Thời gian", "25 – 30 giây"]],
      img: U+"2017/12/phao-dien-cho-dam-cuoi-1-e1746412922397-1.jpg", gallery: [U+"2017/12/phao-dien-sinh-nhat-e1746323220378.jpg"], prod: ["phao-dien"] },
    { s: "phao-phut-xanh-do", fam: "bung-no", name: "Pháo phụt xanh đỏ", old: "dich-vu/phao-phut-lien-thanh-xanh-do",
      short: "Những viên sáng nhiều màu bắn liên thanh lên cao, rực rỡ cho lễ hội ngoài trời.",
      best: ["Lễ hội", "Khánh thành", "Sự kiện ngoài trời"],
      how: ["Bắn liên thanh trong khoảng 120 giây", "Chiều cao dưới 25 m, chỉ dùng ngoài trời", "Kỹ thuật viên đặt và kích hoạt"],
      specs: [["Chiều cao", "< 25 m"], ["Thời gian", "< 120 giây"], ["Phù hợp", "Ngoài trời"]],
      img: U+"2025/05/phao-phut-lien-thanh-xanh-do-5-1.jpg", gallery: [U+"2025/05/phao-phut-lien-thanh-xanh-do-4.jpg"], prod: ["phao-hieu-ung-dac-biet"] },

    { s: "thoi-giay-kim-tuyen", fam: "an-mung", name: "Thổi giấy kim tuyến", old: "dich-vu/hieu-ung-thoi-giay-kim-tuyen",
      short: "Máy thổi liên tục giấy màu và kim tuyến lên cao, phủ kín khán phòng trong ánh đèn.",
      best: ["Khánh thành", "Khởi công", "Ca nhạc", "Tiệc cưới"],
      how: ["Máy 1 nòng hoặc 2 nòng tùy quy mô", "Chọn giấy miếng, giấy sợi hay kim tuyến theo màu thương hiệu", "Có đội dọn dẹp sau chương trình nếu cần"],
      specs: [["Vật liệu", "Giấy màu, kim tuyến miếng hoặc sợi"]],
      img: U+"2017/11/may-thoi-giay-kim-tuyen-3-1.jpg", gallery: [U+"2025/05/phao-kim-tuyen-1-1.jpg"], prod: ["may-tao-hieu-ung", "phu-kien-san-khau"] },
    { s: "phao-giay-trang-kim", fam: "an-mung", name: "Pháo giấy, pháo trang kim", old: "dich-vu/hieu-ung-phao-giay-phao-trang-kim",
      short: "Bắn một phát là cả trời confetti, đúng khoảnh khắc cắt băng hay công bố người thắng.",
      best: ["Lễ trao giải", "Khai trương", "Year-end party", "Concert"],
      how: ["Từ ống cầm tay đến máy công suất lớn", "Bắn bằng khí CO2 hoặc điện", "In màu hoặc logo theo yêu cầu"],
      specs: [["Loại", "Cầm tay, máy bắn, máy xoay"]],
      img: U+"2017/12/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg", gallery: [U+"2025/05/hieu-ung-phao-giay-phao-trang-kim-4.jpg"], prod: ["phu-kien-san-khau"] },
    { s: "phao-xoay", fam: "bung-no", name: "Pháo xoay", old: "dich-vu/hieu-ung-phao-xoay",
      short: "Vòng tia sáng xoay tròn rực rỡ, kéo mọi ánh nhìn về sân khấu.",
      best: ["Tiệc cưới", "Ca nhạc", "Lễ kỷ niệm"],
      how: ["Có loại tam giác, tứ giác cho sân khấu nhỏ đến lớn", "Lắp nhanh, dùng được trong nhà và ngoài trời", "Kỹ thuật viên kiểm soát khoảng cách an toàn"],
      specs: [["Loại", "Tam giác, tứ giác"]],
      img: U+"2019/11/hieu-ung-phao-xoay-280x194-1.jpg", gallery: [U+"2020/08/phao-xoay-saomai-effect-e1746322979977-654x400-1.jpg"], prod: ["phao-dien"] },

    { s: "phao-hoa-nghe-thuat", fam: "bung-no", name: "Pháo hoa nghệ thuật", old: "dich-vu/hieu-ung-phao-hoa-nghe-thuat",
      short: "Pháo hoa tầm thấp và tầm cao, có thể lập trình bắn đúng theo từng nốt nhạc.",
      best: ["Lễ hội", "Countdown", "Khánh thành", "Sự kiện lớn ngoài trời"],
      how: ["Lập trình theo nhạc bằng hệ thống FireOne", "Pháo tầm thấp cho khuôn viên, tầm cao cho quảng trường", "Thực hiện theo đúng quy định và giấy phép"],
      specs: [["Điều khiển", "FireOne, có dây hoặc không dây"]],
      img: U+"2017/11/phao-hoa-nghe-thuat-1-1.jpg", gallery: [U+"2017/11/phao-hoa-nghe-thuat-01-1-1.jpg", U+"2017/12/phao-hoa-nghe-thuat-tam-thap-3-1.jpg"], prod: ["phan-cung"] },
    { s: "thac-phao", fam: "canh-quan", name: "Thác pháo", old: "dich-vu/hieu-ung-thac-phao-thac-lua",
      short: "Dòng tia sáng trắng bạc đổ xuống như thác nước, ngoạn mục cho màn mở hoặc kết.",
      best: ["Ca nhạc", "Khánh thành", "Lễ kỷ niệm"],
      how: ["Treo trên khung, cháy khoảng 30 giây", "Không gây tiếng nổ", "Chiều dài tia đến 2 m mỗi điểm"],
      specs: [["Thời gian", "~30 giây"], ["Chiều dài tia", "đến 2 m"]],
      img: U+"2017/12/hieu-ung-thac-phao-san-khau-4-e1746411114731-665x400-1.jpg", gallery: [U+"2017/11/thac-lua-8-1.jpg"], prod: ["phao-dien"] },
    { s: "duong-lua-vong-lua", fam: "bung-no", name: "Đường lửa, vòng lửa", old: "dich-vu/hieu-ung-duong-lua-vong-lua",
      short: "Đường lửa chạy dọc sân khấu hoặc tạo hình vòng, chữ, logo theo kịch bản.",
      best: ["Lễ hội", "Thể thao", "Sự kiện ngoài trời"],
      how: ["Tạo hình theo thiết kế: đường, vòng, chữ", "Bố trí trên nền chống cháy", "Có phương án an toàn và chữa cháy tại chỗ"],
      specs: [["Hình dạng", "Theo thiết kế"]],
      img: U+"2025/05/hieu-ung-duong-lua-vong-lua-san-khau.jpg", gallery: [U+"2025/05/hieu-ung-duong-lua-vong-lua-san-khau-2.jpg"], prod: [] },

    { s: "man-sao", fam: "canh-quan", name: "Màn sao sân khấu", old: "",
      short: "Phông nền lấp lánh hàng nghìn điểm sáng, biến sân khấu thành bầu trời đêm cho cả chương trình.",
      best: ["Tiệc cưới", "Gala, lễ trao giải", "Ca nhạc", "Hội nghị khách hàng"],
      how: ["Bán hoặc cho thuê theo kích thước sân khấu", "Chạy nhiều chế độ: lấp lánh, chạy sóng, đổi màu", "Lắp trên khung giàn, kết hợp khói để tăng chiều sâu"],
      specs: [["Hình thức", "Bán và cho thuê"], ["Kích thước", "Theo sân khấu"]],
      img: U+"2022/05/man-sao.jpg", gallery: [U+"2022/05/z6460152439647_8eb440684f6f4bafaacf4c006986438b.jpg", U+"2022/04/z6460152431683_12027d8608717d3076ebb7b7b42c8df6-e1750212174114-768x509.jpg"], prod: ["phu-kien-san-khau"] },

    { s: "kich-ban-rieng", fam: "thiet-ke-rieng", name: "Kịch bản hiệu ứng theo yêu cầu", old: "",
      short: "Một chuỗi hiệu ứng được thiết kế riêng cho chương trình: khói, CO2, lửa, pháo chạy nối nhau đúng từng nhịp.",
      best: ["Concert", "Lễ hội", "Ra mắt thương hiệu", "Show truyền hình"],
      how: ["Nghe nhạc, xem kịch bản để chọn điểm đặt hiệu ứng", "Lập trình cue trên bàn điều khiển DMX hoặc FireOne", "Tổng duyệt cùng đạo diễn, âm thanh, ánh sáng trước giờ diễn"],
      specs: [["Điều khiển", "DMX, FireOne"], ["Kết hợp", "Nhiều loại hiệu ứng"]],
      img: U+"2019/10/cot-khoi-co2-hieuungsukien.jpg", gallery: [U+"2019/10/phao-hoa-nghe-thuat-saomai-effect-1-768x321.jpg", U+"2019/11/khoi-lanh_3.jpg"], prod: ["phan-cung", "thiet-bi-san-khau"] }
  ],

  pgroups: [
    { id: "may", name: "Máy hiệu ứng", cats: ["thiet-bi-san-khau","may-tao-hieu-ung","may-phun-cot-khoi-co2","may-phun-khoi-lanh","may-phun-lua","may-tao-tuyet","may-thoi-bong-bong","sung-co2"] },
    { id: "phao", name: "Pháo sân khấu", cats: ["phao-dien","phao-hieu-ung-dac-biet"] },
    { id: "dieu-khien", name: "Điều khiển pháo hoa", cats: ["phan-cung"] },
    { id: "phu-kien", name: "Phụ kiện & nhiên liệu", cats: ["phu-kien-san-khau",""] }
  ],

  /* [slug, tên, danh mục, ảnh, [thông số]] */
  products: [
    ["may-phun-khi-co2-led-goc-cao-newstar-sfx","Máy phun CO2 LED góc cao Newstar SFX","thiet-bi-san-khau",U+"2026/04/5.png",["Máy phun CO2 LED chuyên nghiệp, thế hệ thứ hai","Điều chỉnh được màu cột khói khi phun","Điều khiển DMX"]],
    ["may-tao-phao-giay-xoay-newstar-sfx","Máy tạo pháo giấy xoay Newstar SFX","thiet-bi-san-khau",U+"2026/04/3.png",["Điều khiển DMX512, vùng phủ 60 m²","Treo cao 10 m phủ được khoảng 80 m²","Đầu nối DMX 3 chân hoặc 5 chân"]],
    ["may-khoi-lanh","Máy khói lạnh","thiet-bi-san-khau",U+"2025/06/may-khoi-lanh-e1750229683288-300x200.jpg",["Tạo lớp khói sát sàn cho sân khấu, tiệc cưới"]],
    ["may-ban-soi","Máy bắn sợi","thiet-bi-san-khau",U+"2025/06/z6712842025639_33476554a651e9efd7de904775cd84ea-e1750145442267-300x200.jpg",["Bắn giấy sợi, kim tuyến sợi lên sân khấu"]],
    ["xf-1800-flamer-showven","X-F 1800 Flamer – máy phun lửa thẳng đứng 10 m","thiet-bi-san-khau",U+"2025/06/may-lu-5-tia-e1749521660470-300x200.webp",["Mã sản phẩm: X-F1800","Kích thước: 590 × 360 × 370 mm","Lửa thẳng đứng cao đến 10 m"]],
    ["uflamer-volcano","UFlamer Volcano – máy phun lửa 5 tia","thiet-bi-san-khau",U+"2025/06/uflamer-Volcano-scaled-e1749518501378-300x200.webp",["Kích thước: 630 × 450 × 400 mm","Trọng lượng: 48 kg","Phun 5 tia lửa"]],
    ["led-co2-machine-manual","LED CO2 Machine – máy phun khói CO2","thiet-bi-san-khau",U+"2025/05/z6584666019125_de266e112b832ade6c66f556916d5f38-e1748311413958-300x200.jpg",["Model: DC-21","Công suất: 180 W","Kèm dây cáp nguồn và ống 6 m"]],
    ["may-phun-30s","Máy phun 30s","thiet-bi-san-khau",U+"2025/05/May_phun30s-e1748664358575-300x200.webp",["Chiều cao tia lửa: 1 – 4 m","Góc phun: thẳng đứng","Điện áp: AC 110/220 V"]],
    ["quat-dmx","Quạt DMX","thiet-bi-san-khau",U+"2025/05/Fan-DMX-e1750211964664-300x200.webp",["Model: DE-05","Công suất: 380 W","Trọng lượng: 17,5 kg"]],
    ["may-lua-uflamer","Máy phun cột lửa uFlamer","thiet-bi-san-khau",U+"2025/05/uFlamer-x20-700x700-1-e1748661795213-300x200.webp",["Chiều cao ngọn lửa: 8 – 10 m","Hướng phun: thẳng đứng","Điều khiển: DMX"]],
    ["phun-cot-khoi-co2-may-lon","Phun cột khói CO2 máy lớn","may-phun-cot-khoi-co2",U+"2019/11/cot-khoi-co2-saomai-effect.jpg",["Cột khói cao 8 – 12 m","Khí CO2 không cháy, không độc hại","Điều khiển DMX512 hoặc từ xa"]],
    ["phun-cot-khoi-co2-may-nho","Phun cột khói CO2 máy nhỏ","may-phun-cot-khoi-co2",U+"2022/05/admin-ajax-1.jpg",["Cột khói cao 6 – 8 m","Công suất: 30 – 50 W","Điện áp: 100 – 240 V AC"]],
    ["sung-phun-khoi-co2","Súng phun khói CO2","sung-co2",U+"2020/05/sung-ban-khoi-co2-4-602x400-1.jpg",["Khói trắng bồng bềnh cho sân khấu, tiệc cưới","Khoảng cách phun: 6 – 8 m","Điều khiển cầm tay"]],
    ["sung-phun-khoi-co2-theo-cai","Súng phun khói CO2 theo bộ","sung-co2",U+"2020/05/sung-ban-khoi-co2-4-602x400-1.jpg",["Gồm bình CO2, bộ xả khí, dây dẫn và nòng súng","Khói dày, an toàn, tự tan"]],
    ["phun-khoi-lanh-theo-binh","Phun khói lạnh theo bình","may-phun-khoi-lanh",U+"2022/05/z6566939017854_fd12a98bf2e6a5729170a572e2be7170-e1746341084892-300x200.jpg",["Dùng nitơ lỏng, khói mờ ảo, an toàn","Khói xuất hiện nhanh, tan nhanh","Điều chỉnh lượng khói theo tốc độ phun"]],
    ["phun-khoi-lanh-theo-bai","Phun khói lạnh theo bài","may-phun-khoi-lanh",U+"2019/11/khoi-lanh_3.jpg",["Khói phun đồng bộ với giai điệu bài hát","Tích hợp với âm thanh, ánh sáng"]],
    ["hieu-ung-khoi-lanh-san-khau-theo-binh","Hiệu ứng khói lạnh sân khấu theo bình","may-phun-khoi-lanh",U+"2019/10/khoi-lanh-sk.jpg",["Khói phun đồng bộ với giai điệu bài hát","Khí không gây hại cho sức khỏe"]],
    ["khoi-lanh-theo-san-khau","Thác khói lạnh","may-phun-khoi-lanh",U+"2020/05/thac-khoi-lanh-1.jpg",["Khói chảy ngược từ trên xuống","Đặt nơi thoáng, tránh gió mạnh"]],
    ["may-phut-lua-cao","Máy phụt lửa cao","may-phun-lua",U+"2019/11/hieu_ung_lua.jpg",["Dùng gas, chỉnh được chiều cao và màu lửa","Điều khiển từ xa qua DMX512"]],
    ["may-phun-cot-lua","Máy phun cột lửa","may-phun-lua",U+"2019/11/may-thua-thap.jpg",["Cột lửa cao, mạnh","Điều khiển DMX hoặc từ xa"]],
    ["may-tao-tuyet-may-lon","Máy tạo tuyết máy lớn","may-tao-tuyet",U+"2017/12/may-phun-hieu-ung-tuyet-roi-1-e1746413916687-1.jpg",["Phun tuyết xa 4 – 20 m","Bình chứa lớn, chạy lâu","Điều khiển từ xa hoặc cầm tay"]],
    ["may-tao-tuyet-may-nho","Máy tạo tuyết máy nhỏ","may-tao-tuyet",U+"2019/11/hieu-ung-tao-tuyet-7.jpg",["Nhỏ gọn, dễ di chuyển","Chỉ cần cắm điện và thêm dung dịch"]],
    ["may-thoi-bong-bong-may-lon","Máy thổi bong bóng máy lớn","may-thoi-bong-bong",U+"2017/12/hieu-ung-bong-bong-re-dep-23-e1746409335752-1.jpg",["Công suất: 100 – 2000 W","Phạm vi thổi: 4 – 6 m"]],
    ["may-thoi-bong-bong-may-nho","Máy thổi bong bóng máy nhỏ","may-thoi-bong-bong",U+"2019/11/may-bong-bong-1.jpg",["Nhỏ gọn, hoạt động tự động","Hợp tiệc sinh nhật, thiếu nhi"]],
    ["may-thoi-giay-kim-tuyen","Máy thổi giấy, kim tuyến","may-tao-hieu-ung",U+"2019/11/hieu_ung_thoi_giay.jpg",["Phun giấy và kim tuyến nhiều màu","Cắm điện là dùng được"]],
    ["phao-30s","Pháo 30s","phao-dien",U+"2019/11/30s.jpg",["Tia sáng và khói trong 25 – 30 giây","Chiều cao: 2,5 – 3 m"]],
    ["phao-1-giay","Pháo 1 giây","phao-dien",U+"2019/11/57012677_570592383429962_7797673091944939520_n.jpg",["Chiều cao phun: đến 9 m","Kích hoạt bằng pin 3 V"]],
    ["phao-thac","Pháo thác","phao-dien",U+"2017/11/thac-lua-5-1-e1746410804954-1.jpg",["Tia sáng trắng bạc như thác nước","Cháy ~30 giây, dài tối đa 2 m","Không gây tiếng nổ"]],
    ["phao-xoay","Pháo xoay","phao-dien",U+"2020/08/phao-xoay-saomai-effect-e1746322979977-654x400-1.jpg",["Loại tam giác, tứ giác","Dùng trong nhà và ngoài trời"]],
    ["phao-phut-xanh-do","Pháo phụt liên thanh xanh đỏ","phao-hieu-ung-dac-biet",U+"2019/11/57094479_570592356763298_3869558567811940352_n.jpg",["Phun viên sáng đỏ, xanh, vàng","Dưới 120 giây, cao dưới 25 m","Chỉ dùng ngoài trời"]],
    ["module-truyen-32-dau-ra-fireone-fm-32q","Module truyền 32 đầu ra FireOne FM-32Q","phan-cung",U+"2022/04/Product-FM32Q-3-1.jpg",["32 kênh đầu ra, công nghệ 2-Wire","Truyền tín hiệu xa, ổn định"]],
    ["fireone-fm-i8q","FireOne FM-i8Q","phan-cung",U+"2022/04/Product-FM-i8Q-1-e1747101126635-300x200.jpg",["Module bắn pháo hoa không dây","8 kênh đầu ra độc lập"]],
    ["fireone-fm-i32q","FireOne FM-i32Q","phan-cung",U+"2022/04/Product-FM-i32Q-5-e1747101174764-300x200.jpg",["32 kênh điều khiển độc lập","Không dây, phạm vi đến 6,5 km"]],
    ["fireone-mp2","FireOne MP2","phan-cung",U+"2022/04/Product-MP2-2-e1747625341511-300x200.jpg",["Bộ điều khiển bắn pháo hoa 2 kênh","Hỗ trợ module có dây và không dây"]],
    ["binh-chua-khi-co2","Bình chứa khí CO2","",U+"2025/05/z6406302533726_876ad3e04b53211c8ae8ed73bb768fe6-e1748676158102-300x200.jpg",["Thể tích: 40 lít","Kiểm định an toàn 5 năm","Cao 1400 mm, đường kính 229 mm"]],
    ["day-dan-co2","Dây dẫn CO2","phu-kien-san-khau",U+"2025/05/day-dan-co2-1.jpg",["Chịu áp lực cao","Dẫn CO2 từ bình tới súng, máy phun"]],
    ["day-khoi-lanh","Dây khói lạnh","phu-kien-san-khau",U+"2025/05/Day-khoi-lanh-e1750212071447-300x200.jpg",["Dài 3 m, 6 m hoặc 10 m","Vật liệu chịu lạnh và áp suất cao"]],
    ["giay-mau-mieng","Giấy màu miếng cho máy thổi","phu-kien-san-khau",U+"2025/06/Giay-mau-mieng-e1750304557518-300x200.jpg",["Dùng cho máy thổi kim tuyến, máy pháo giấy xoay","Bay nhẹ, tỏa đều"]],
    ["kim-tuyen-mieng","Kim tuyến miếng cho máy thổi","phu-kien-san-khau",U+"2025/06/z6717504954666_1331c61ce91a7d00d86796c589131c2b-e1750903074152-201x200.jpg",["Lấp lánh, bắt sáng trong ánh đèn","Dùng cho máy thổi hoặc rải tay"]],
    ["giay-mau-soi","Giấy màu sợi","phu-kien-san-khau",U+"2025/06/kim-tuyen-soi-e1750293936222-300x200.jpg",["Dài 3 m, 5 m hoặc 10 m","Dùng cho máy bắn confetti"]],
    ["kim-tuyen-soi","Kim tuyến sợi","phu-kien-san-khau",U+"2025/06/z6717489982466_9eb1809e05549e33d7b4a00ad117a22f-e1750294018155-300x200.jpg",["Dài 3 cm, 5 cm hoặc 10 cm","Bay xa, lấp lánh"]],
    ["man-sao-san-khau-su-kien","Màn sao sân khấu sự kiện","phu-kien-san-khau",U+"2022/04/z6460152431683_12027d8608717d3076ebb7b7b42c8df6-e1750212174114-300x200.jpg",["Bán và cho thuê","Nhiều kích thước"]],
    ["nhien-lieu-may-tuyet","Nhiên liệu máy tuyết","phu-kien-san-khau",U+"2025/06/nhien_lieu_bong_bong-e1750215446752-300x200.jpg",["Thể tích: 5 lít"]],
    ["nhien-lieu-may-phun-30s","Nhiên liệu máy phun 30s","phu-kien-san-khau",U+"2019/11/30s.jpg",["Thương hiệu: SKV","Túi 200 g, hạt zirconium và titan"]],
    ["nhien-lieu-may-tao-khoi","Nhiên liệu máy tạo khói","phu-kien-san-khau",U+"2025/05/nhien-lieu-may-tao-khoi-e1750214809440-300x200.jpg",["Thể tích: 5 lít","Khói dày, lâu tan"]],
    ["nhien-lieu-may-khoi-nong","Nhiên liệu máy khói nóng","phu-kien-san-khau",U+"2025/05/z6651030153377_be774932dfa09daa2bb0f91b42c4ecec-e1750215117466-300x200.jpg",["Dung tích: 5 lít"]]
  ],

  /* Gói đề xuất — nội dung cần Newstar xác nhận trước khi đăng */
  combos: [
    { id: "cuoi", name: "Tiệc cưới", img: U+"2017/12/phao-dien-cho-dam-cuoi-1-e1746412922397-1.jpg",
      for: "Nhà hàng tiệc cưới, tiệc ngoài trời",
      items: ["Khói lạnh sát sàn cho màn chào cô dâu chú rể", "Pháo lửa lạnh 30 giây hai bên lối đi", "Bắn kim tuyến lúc cắt bánh, rót rượu", "Tùy chọn: tuyết rơi hoặc bong bóng"] },
    { id: "khai-truong", name: "Khai trương, khánh thành", img: U+"2022/09/phao-kim-tuyen-1-1.jpg",
      for: "Cửa hàng, showroom, nhà máy, công trình",
      items: ["Pháo giấy, kim tuyến đúng lúc cắt băng", "Súng CO2 tạo khói mở màn", "Pháo phụt hoặc pháo hoa tầm thấp (ngoài trời)", "Kỹ thuật viên trực suốt nghi thức"] },
    { id: "concert", name: "Concert & lễ hội", img: U+"2022/07/z6662588926930_fe7e8e4eeaff381f3ca789532dd05183.jpg",
      for: "Sân khấu ca nhạc, EDM, lễ hội âm nhạc",
      items: ["Cột khói CO2 chạy đồng bộ theo nhạc", "Phun lửa, pháo 1 giây cho đoạn cao trào", "Máy bắn confetti, kim tuyến cho màn kết", "Lập trình và điều khiển DMX tại chỗ"] },
    { id: "doanh-nghiep", name: "Year-end party & doanh nghiệp", img: U+"2019/10/cot-khoi-co2-1400x623.jpg",
      for: "Tất niên, hội nghị khách hàng, lễ vinh danh",
      items: ["Cột khói CO2 mở màn chương trình", "Khói lạnh cho tiết mục vinh danh", "Pháo giấy lúc công bố giải thưởng", "Có thể in màu kim tuyến theo nhận diện thương hiệu"] }
  ],

  /* Hỏi đáp — cần Newstar xác nhận nội dung trả lời */
  faqs: [
    ["Chi phí thuê hiệu ứng được tính như thế nào?", "Báo giá dựa trên loại và số lượng hiệu ứng, thời lượng sử dụng, địa điểm và số kỹ thuật viên cần có mặt. Gửi thông tin sự kiện qua form báo giá, Newstar sẽ tư vấn phương án phù hợp ngân sách."],
    ["Nên đặt hiệu ứng trước bao lâu?", "Càng sớm càng tốt để giữ lịch thiết bị và kỹ thuật viên, nhất là mùa cưới và cuối năm. Sự kiện lớn cần thêm thời gian khảo sát và lên kịch bản."],
    ["Newstar có phục vụ sự kiện ở tỉnh không?", "Có. Newstar nhận sự kiện tại TP. HCM và các tỉnh thành; chi phí vận chuyển và lưu trú của đội kỹ thuật sẽ được ghi rõ trong báo giá."],
    ["Hiệu ứng khói CO2, khói lạnh có an toàn không?", "Khí CO2 và nitơ dùng cho sân khấu không cháy và tự tan trong không khí. Kỹ thuật viên căn lượng khói và khoảng cách để không ảnh hưởng nghệ sĩ và khách mời."],
    ["Dùng pháo, phun lửa trong nhà được không?", "Một số loại như pháo lửa lạnh 30 giây, pháo 1 giây dùng được trong nhà có trần cao. Phun lửa và pháo hoa chỉ dùng ngoài trời hoặc nơi đủ điều kiện, theo quy định của địa điểm."],
    ["Có cho thuê riêng thiết bị không kèm kỹ thuật viên không?", "Có cho thuê và bán thiết bị. Với thiết bị dùng khí nén, gas hoặc pháo, Newstar khuyến nghị có kỹ thuật viên đi kèm để đảm bảo an toàn."],
    ["Giấy, kim tuyến sau sự kiện ai dọn?", "Có thể thỏa thuận dịch vụ dọn dẹp sau chương trình khi báo giá, hoặc chọn loại giấy dễ thu gom cho địa điểm yêu cầu."],
    ["Thanh toán như thế nào?", "Đặt cọc 50% khi ký hợp đồng, thanh toán 50% còn lại trong vòng 15 ngày kể từ ngày diễn ra chương trình, bằng tiền mặt hoặc chuyển khoản. Báo giá có hiệu lực 15 ngày và chưa gồm 10% VAT."]
  ],

  /* 18 video từ trang /video cũ. Video không có tiêu đề trên web cũ được ghi "Video hiệu ứng" — cần Newstar đặt tên */
  videos: [
    { id: "90t378cs6Gk", title: "Máy khói kết hợp pháo 30s", fx: "khoi-lanh" },
    { id: "2IK1j-4By4s", title: "Pháo lập trình theo nhạc", fx: "phao-hoa-nghe-thuat" },
    { id: "5gDoMzleWQs", title: "Thác khói lạnh", fx: "khoi-lanh" },
    { id: "lSa2Yg5xuGM", title: "Hiệu ứng pháo xoay", fx: "phao-xoay" },
    { id: "dYO_NoNLYxw", title: "Máy lửa kết hợp pháo 30s", fx: "phun-lua" },
    { id: "wq6Cg5iQQm4", title: "Hiệu ứng máy lửa", fx: "phun-lua" },
    { id: "tLxuvutEvxk", title: "Video hiệu ứng 7" }, { id: "ydKIH7M5Tpo", title: "Video hiệu ứng 8" },
    { id: "gSEVG2SN4AU", title: "Màn sao sân khấu", fx: "man-sao" }, { id: "3dmuMZ0_5-Y", title: "Video hiệu ứng 10" },
    { id: "SWLyh93ni-4", title: "Video hiệu ứng 11" }, { id: "45BbK3rRd9o", title: "Video hiệu ứng 12" },
    { id: "I_LU-RY8mbQ", title: "Video hiệu ứng 13" }, { id: "9w2Wo7Up-18", title: "Video hiệu ứng 14" },
    { id: "g1QoNDnTAy0", title: "Video hiệu ứng 15" }, { id: "4b8XWDq0gK8", title: "Video hiệu ứng 16" },
    { id: "mU7QqQRfCAA", title: "Video hiệu ứng 17" }, { id: "ylkjkgL5dq8", title: "Video hiệu ứng 18" }
  ],

  /* 13 danh mục sản phẩm của web cũ (/dmsp/...). parent = danh mục cha */
  pcats: [
    { s: "may-tao-hieu-ung", n: "Máy tạo hiệu ứng", parent: "" },
    { s: "may-phun-khoi-lanh", n: "Máy phun khói lạnh", parent: "may-tao-hieu-ung" },
    { s: "may-phun-cot-khoi-co2", n: "Máy phun CO2", parent: "may-tao-hieu-ung" },
    { s: "sung-co2", n: "Súng bắn CO2", parent: "may-tao-hieu-ung" },
    { s: "may-phun-lua", n: "Máy phun lửa", parent: "may-tao-hieu-ung" },
    { s: "may-tao-tuyet", n: "Máy tạo tuyết", parent: "may-tao-hieu-ung" },
    { s: "may-thoi-bong-bong", n: "Máy thổi bong bóng", parent: "may-tao-hieu-ung" },
    { s: "phao-dien", n: "Pháo điện", parent: "" },
    { s: "phao-hieu-ung-dac-biet", n: "Pháo hiệu ứng đặc biệt", parent: "" },
    { s: "thiet-bi-san-khau", n: "Thiết bị sân khấu", parent: "" },
    { s: "phan-cung", n: "Phần cứng điều khiển pháo hoa", parent: "thiet-bi-san-khau" },
    { s: "phu-kien-san-khau", n: "Phụ kiện sân khấu", parent: "" },
    { s: "chua-phan-loai", n: "Chưa phân loại", parent: "" }
  ],

  /* 8 chuyên mục bài viết của web cũ (/chuyen-muc/...) */
  postCatList: [
    { s: "tin-tuc", n: "Tin tức", d: "Tin tức, hậu trường và những chương trình Newstar tham gia." },
    { s: "thong-tin-san-pham", n: "Kiến thức thiết bị", d: "Tìm hiểu thiết bị tạo hiệu ứng: cách hoạt động, cách chọn máy." },
    { s: "dich-vu", n: "Dịch vụ", d: "Giới thiệu các dịch vụ hiệu ứng trọn gói của Newstar." },
    { s: "chia-se", n: "Chia sẻ", d: "Kinh nghiệm sử dụng hiệu ứng cho từng loại sự kiện." },
    { s: "hoi-dap", n: "Hỏi đáp", d: "Giải đáp thắc mắc thường gặp về hiệu ứng và thiết bị." },
    { s: "su-kien", n: "Sự kiện", d: "Các sự kiện có sử dụng hiệu ứng của Newstar." },
    { s: "du-an", n: "Dự án", d: "Chuyên mục cũ — nay chuyển sang trang Dự án riêng." },
    { s: "uncategorized", n: "Chưa phân loại", d: "Bài viết chưa gán chuyên mục." }
  ],

  /* Điều kiện thương mại lấy từ trang /bao-gia cũ */
  quoteTerms: [
    "Báo giá chưa bao gồm 10% thuế GTGT.",
    "Giá báo có giá trị trong 15 ngày tính từ ngày báo giá.",
    "Thanh toán lần 1: đặt cọc 50% tổng giá trị hợp đồng khi ký hợp đồng.",
    "Thanh toán lần 2: 50% còn lại trong vòng 15 ngày kể từ ngày diễn ra chương trình.",
    "Thanh toán tiền mặt hoặc chuyển khoản."
  ],
  /* Tài khoản ngân hàng — giữ đúng như web cũ: trang Báo giá ghi Techcombank, trang Liên hệ ghi Sacombank */
  bankQuote: { owner: "Công ty TNHH Thương mại và Dịch vụ Phát triển Newstar", number: "8902825871", bank: "Ngân hàng TMCP Kỹ Thương Việt Nam (Techcombank) – Chi nhánh Trường Chinh" },
  bankContact: { number: "0600 9656 3038", bank: "Sacombank – Chi nhánh Trung Chánh" },

  clients: [
    ["Heineken", U+"2025/12/heineken.jpg", "fill"], ["VPBank", U+"2025/12/VPbank.webp"], ["Honda", U+"2019/12/honda-logo.png"],
    ["Tiger", U+"2025/12/tiger.webp", "fill"], ["VCCorp", U+"2025/12/VCcorp.webp"], ["MobiFone", U+"2019/12/mobifone-logo.png"],
    ["Co.opmart", U+"2019/12/coopmart-logo.png"], ["Tân Hiệp Phát", U+"2019/12/thp-logo.png"]
  ],

  /* Dự án mẫu — thay bằng dự án thật */
  projects: [
    { s: "dem-nhac-ngoai-troi", cat: "concert", catName: "Concert & ca nhạc", name: "Đêm nhạc ngoài trời", fx: ["cot-khoi-co2","thoi-giay-kim-tuyen","phun-lua"], img: U+"2022/07/z6662588926930_fe7e8e4eeaff381f3ca789532dd05183.jpg", sum: "Pháo kim tuyến và cột khói CO2 chạy theo nhịp nhạc cho phần cao trào." },
    { s: "le-hoi-mo-man", cat: "festival", catName: "Lễ hội", name: "Lễ hội — màn mở màn", fx: ["cot-khoi-co2"], img: U+"2019/11/may-thua-thap.jpg", sum: "Dàn cột khói CO2 bắn đồng loạt khi chương trình bắt đầu." },
    { s: "tiec-cuoi-khoi-lanh", cat: "wedding", catName: "Tiệc cưới", name: "Tiệc cưới — màn chào cô dâu chú rể", fx: ["khoi-lanh","phao-30s"], img: U+"2019/11/khoi-lanh_3.jpg", sum: "Khói lạnh sát sàn và pháo lửa lạnh dọc lối đi." },
    { s: "ra-mat-san-pham", cat: "brand", catName: "Ra mắt thương hiệu", name: "Ra mắt sản phẩm mới", fx: ["phao-giay-trang-kim"], img: U+"2022/08/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg", sum: "Kim tuyến bắn đúng khoảnh khắc sản phẩm xuất hiện." },
    { s: "year-end-party", cat: "corp", catName: "Sự kiện doanh nghiệp", name: "Year-end party", fx: ["phao-giay-trang-kim","thoi-giay-kim-tuyen"], img: U+"2022/09/phao-kim-tuyen-1-1.jpg", sum: "Pháo giấy và kim tuyến cho phần công bố giải thưởng." },
    { s: "san-khau-ca-nhac", cat: "concert", catName: "Concert & ca nhạc", name: "Sân khấu ca nhạc trong nhà", fx: ["cot-khoi-co2","khoi-lanh"], img: U+"2019/10/cot-khoi-co2-1400x623.jpg", sum: "Kết hợp khói lạnh và cột khói CO2 cùng hệ thống ánh sáng." },
    { s: "phao-hoa-le-hoi", cat: "festival", catName: "Lễ hội", name: "Pháo hoa nghệ thuật lễ hội", fx: ["phao-hoa-nghe-thuat"], img: U+"2017/11/phao-hoa-nghe-thuat-1-1.jpg", sum: "Pháo hoa tầm thấp lập trình theo nhạc." },
    { s: "khai-truong-showroom", cat: "brand", catName: "Ra mắt thương hiệu", name: "Khai trương showroom", fx: ["phao-giay-trang-kim","cot-khoi-co2"], img: U+"2017/11/may-thoi-giay-kim-tuyen-3-1.jpg", sum: "Pháo giấy lúc cắt băng, súng CO2 mở màn." }
  ],

  postCats: { "tin-tuc": "Tin tức", "thong-tin-san-pham": "Kiến thức thiết bị", "dich-vu": "Dịch vụ", "chia-se": "Chia sẻ", "hoi-dap": "Hỏi đáp", "uncategorized": "Tin tức" },
  /* [slug, ngày, tiêu đề, danh mục, ảnh, tóm tắt] */
  posts: [
["thiet-bi-khoi-lanh-n2-giai-phap-tao-hieu-ung-khoi-sat-san-cho-san-khau-va-su-kien","2026-10-22","Thiết bị khói lạnh N2 – giải pháp tạo hiệu ứng khói sát sàn cho sân khấu và sự kiện","uncategorized","","Tìm hiểu thiết bị khói lạnh N2, ưu điểm, ứng dụng trong tiệc cưới và sân khấu. Tư vấn lựa chọn máy khói sàn phù hợp."],
["hieu-ung-khoi-lanh-san-khau-su-kien-tron-goi-hung-sao-mai-effect","2023-06-19","Hiệu ứng khói lạnh sân khấu sự kiện trọn gói – Newstar Effect","dich-vu",U+"2019/11/khoi-lanh_3.jpg","Hiệu ứng khói lạnh sân khấu của Newstar Effect đã hỗ trợ tạo nên rất nhiều sự kiện lớn tại Việt Nam."],
["vi-sao-may-ban-kim-tuyen-2-nong-duoc-ua-chuong","2022-10-03","Vì sao máy bắn kim tuyến 2 nòng được nhiều nhà tổ chức sự kiện ưa chuộng?","chia-se",U+"2017/11/may-thoi-giay-kim-tuyen-3-1.jpg","Vì sao máy bắn kim tuyến 2 nòng được nhiều nhà tổ chức sự kiện ưa chuộng? Hãy cùng Newstar Effect trả lời câu hỏi này."],
["2-dong-may-ban-kim-tuyen-gia-re","2022-09-30","Tham khảo 2 dòng máy bắn kim tuyến giá rẻ được yêu thích nhất","dich-vu",U+"2022/09/phao-kim-tuyen-1-1.jpg","Bạn cần tìm mua, thuê máy bắn kim tuyến giá rẻ? Newstar Effect gợi ý 2 loại máy chất lượng tốt."],
["thue-may-ban-kim-tuyen","2022-08-30","Thuê máy bắn kim tuyến tại Newstar Effect mang đến những lợi ích gì?","dich-vu",U+"2022/08/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg","Những lý do bạn nên thuê máy bắn kim tuyến tại Newstar Effect."],
["may-ban-kim-tuyen-dung-trong-san-khau-su-kien-nao","2022-07-30","Máy bắn kim tuyến thường được dùng trong những sân khấu sự kiện nào?","chia-se",U+"2022/07/z6662588926930_fe7e8e4eeaff381f3ca789532dd05183.jpg","Máy bắn kim tuyến mang đến cho sân khấu hiệu ứng đẹp mắt, ấn tượng. Cụ thể thường dùng ở đâu?"],
["2-dong-san-pham-sung-phun-khoi-co2","2022-06-30","Tìm hiểu về 2 dòng sản phẩm súng phun khói CO2 thông dụng nhất","thong-tin-san-pham",U+"2018/02/sung-ban-khoi-co2-4-602x400-1.jpg","Súng phun khói CO2 là thiết bị tạo hiệu ứng bất ngờ, ấn tượng trên sân khấu."],
["2-dong-may-tao-cot-khoi-co2-hot-nhat","2022-05-30","2 dòng máy tạo cột khói CO2 hot nhất trong ngành hiệu ứng sân khấu","thong-tin-san-pham",U+"2019/11/may-thua-thap.jpg","Để tạo ra những cột khói cao vút trên sân khấu, người ta dùng thiết bị gì?"],
["cot-khoi-co2-la-gi","2022-05-20","Cột khói CO2 là gì? Newstar Effect có gói dịch vụ hay sản phẩm tạo cột khói CO2 nào?","thong-tin-san-pham",U+"2022/05/admin-ajax-1.jpg","Bạn ấn tượng với hình ảnh cột khói CO2 trên sân khấu và muốn tìm hiểu hiệu ứng này là gì?"],
["3-dong-may-tao-khoi-nang-thong-dung-nhat","2022-05-15","Tìm hiểu chi tiết về 3 dòng máy tạo khói nặng thông dụng nhất","thong-tin-san-pham",U+"2022/05/z6566939017854_fd12a98bf2e6a5729170a572e2be7170-e1746341084892-768x406.jpg","Những làn khói mờ ảo bay là là trên sân khấu luôn tạo cảm giác huyền bí."],
["thue-man-sao-san-khau","2022-05-10","3 lý do quý khách nên chọn thuê màn sao sân khấu tại Newstar Effect","tin-tuc",U+"2022/05/man-sao.jpg","Đang tìm đơn vị cho thuê màn sao sân khấu uy tín tại TP. HCM?"],
["gia-man-sao-san-khau-tinh-nhu-the-nao","2022-05-05","Giá màn sao sân khấu được tính như thế nào?","thong-tin-san-pham",U+"2022/05/z6460152439647_8eb440684f6f4bafaacf4c006986438b.jpg","Bạn có biết giá màn sao sân khấu được tính dựa trên những yếu tố nào?"],
["nhung-kieu-mau-man-sao-su-kien","2022-04-25","Những kiểu mẫu màn sao sự kiện được ưa chuộng nhất hiện nay","thong-tin-san-pham",U+"2022/04/z6460152431683_12027d8608717d3076ebb7b7b42c8df6-e1750212174114-768x509.jpg","Màn sao là vật dụng góp phần trang hoàng sân khấu sự kiện."],
["man-sao-san-khau-dung-trong-su-kien-nao","2022-04-20","Màn sao sân khấu thường được dùng trong những sự kiện nào?","tin-tuc",U+"2022/05/z6460152439647_8eb440684f6f4bafaacf4c006986438b.jpg","Màn sao góp phần nâng cao tính thẩm mỹ cho sân khấu sự kiện."],
["phao-sang-san-khau-dinh-nghia-phan-loai-ung-dung-don-vi-thi-cong","2020-08-14","Pháo sáng sân khấu – định nghĩa, phân loại, ứng dụng, đơn vị thi công","tin-tuc",U+"2020/01/phao-xoay-saomai-effect-e1746322979977-768x470.jpg","Pháo sáng sân khấu – hiệu ứng hình ảnh và ánh sáng xuất hiện trên hầu hết sân khấu hiện nay."],
["hieu-ung-khoi-nang-san-khau-giong-va-khac-hieu-ung-khoi-nhe-nhu-the-nao","2020-08-12","Hiệu ứng khói nặng sân khấu giống và khác hiệu ứng khói nhẹ như thế nào?","tin-tuc",U+"2022/05/z6566939017854_fd12a98bf2e6a5729170a572e2be7170-e1746341084892-768x406.jpg","So sánh hai hiệu ứng phun khói phổ biến nhất trên sân khấu."],
["phao-xoay-tam-giac-la-gi-nhung-san-khau-su-kien-thuong-dung-loai-phao-nay","2020-08-10","Pháo xoay tam giác là gì? Những sân khấu nào thường dùng?","tin-tuc",U+"2017/11/hieu-ung-phao-xoay-280x194-1.jpg","Pháo xoay tam giác là hiệu ứng pháo điện để lại ấn tượng sâu sắc."],
["cac-loai-phao-san-khau-thuong-duoc-cac-nha-to-chuc-su-kien-dung-nhieu-nhat","2020-08-07","Các loại pháo sân khấu được nhà tổ chức sự kiện dùng nhiều nhất","tin-tuc",U+"2017/11/phao-phut-1s-cao-10m-1-1.jpg","Pháo sân khấu là hiệu ứng không thể thiếu để chương trình thêm sôi động."],
["nhung-dieu-can-biet-ve-bieu-dien-phao-hoa-thuat-theo-am-nhac","2020-08-05","Những điều cần biết về biểu diễn pháo hỏa thuật theo âm nhạc","thong-tin-san-pham",U+"2017/11/phao-hoa-nghe-thuat-3-1.jpg","Biểu diễn pháo hỏa thuật theo âm nhạc ngày càng được ứng dụng nhiều hơn."],
["vi-sao-hieu-ung-ban-phao-hoa-lap-trinh-theo-nhac-ngay-cang-duoc-ua-chuong","2020-08-03","Vì sao bắn pháo hoa lập trình theo nhạc ngày càng được ưa chuộng?","tin-tuc",U+"2019/10/phao-hoa-nghe-thuat-saomai-effect-1-768x321.jpg","Vì sao nhu cầu bắn pháo hoa lập trình theo nhạc tăng trong các lễ hội lớn?"],
["phao-hoa-nghe-thuat-la-gi-va-no-thuong-duoc-su-dung-trong-nhung-su-kien-nao","2020-07-31","Pháo hoa nghệ thuật là gì? Thường dùng trong những sự kiện nào?","thong-tin-san-pham",U+"2017/11/phao-hoa-nghe-thuat-1-1.jpg","Tìm hiểu về loại hiệu ứng sự kiện hoành tráng này."],
["dich-vu-cho-thue-may-phut-lua-cong-nghe-moi-cua-sao-mai-effect","2020-07-29","Dịch vụ cho thuê máy phụt lửa công nghệ mới của Newstar Effect","thong-tin-san-pham",U+"2018/02/admin-ajax.jpg","Thiết bị tạo hiệu ứng sân khấu ngày càng được nâng cấp hiện đại."],
["may-phun-lua-cao-10m-thiet-bi-khong-the-thieu-trong-cac-show-ca-nhac-edm-dang-cap","2020-07-27","Máy phun lửa cao 10 m – thiết bị không thể thiếu trong show EDM","thong-tin-san-pham",U+"2020/05/z6604492295270_260099924544513372b7d85f0c056100.jpg","Giới thiệu thiết bị tạo hiệu ứng sân khấu cực kỳ mãn nhãn."],
["loai-may-thoi-kim-tuyen-nao-duoc-cac-nha-to-chuc-su-kien-yeu-thich-nhat","2020-07-24","Loại máy thổi kim tuyến nào được nhà tổ chức sự kiện yêu thích nhất?","thong-tin-san-pham",U+"2020/07/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg","Máy thổi kim tuyến tạo ra những màn mưa kim tuyến ấn tượng."],
["tim-hieu-ve-may-phun-cot-khoi-co2-tren-cac-san-khau-su-kien","2020-07-22","Tìm hiểu về máy phun cột khói CO2 trên các sân khấu sự kiện","thong-tin-san-pham",U+"2020/07/phun-khoi.jpg","Cột khói CO2 tạo nên hình ảnh ngoạn mục trên sân khấu."],
["3-goi-dich-vu-hieu-ung-khoi-lanh-san-khau-cua-sao-mai-effect","2020-07-20","3 gói dịch vụ hiệu ứng khói lạnh sân khấu của Newstar Effect","dich-vu",U+"2019/10/khoi-lanh-sk.jpg","Những gói dịch vụ khói lạnh đã tạo nên nhiều sự kiện lung linh."],
["gioi-thieu-ve-sao-mai-effect","2020-02-07","Giới thiệu về Newstar Effect","tin-tuc",U+"2025/03/logo-nt.jpg","Một trong những đơn vị đi đầu cung cấp dịch vụ hiệu ứng sự kiện."],
["ban-co-tu-chuc-su-kien-chuyen-nghiep-neu-lam-theo-cac-buoc-sau","2018-03-22","Bạn có thể tự tổ chức sự kiện chuyên nghiệp nếu làm theo các bước sau","tin-tuc",U+"2018/03/may-tao-hieu-ung-san-khau-su-kien-2-e1746344835881.jpg","Tự tổ chức sự kiện vui tươi, hoành tráng với hiệu ứng sân khấu."],
["ban-co-biet-cach-tao-hieu-ung-phao-kim-tuyen-cho-san-khau-su-kien","2018-03-21","Cách tạo hiệu ứng pháo kim tuyến cho sân khấu sự kiện","tin-tuc",U+"2020/07/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg","Làm cách nào để tạo hiệu ứng pháo kim tuyến lung linh trên sân khấu?"],
["3-cach-de-tao-hieu-ung-khoi-dep-bong-benh-tren-san-khau-su-kien","2018-03-20","3 cách tạo hiệu ứng khói bồng bềnh trên sân khấu sự kiện","tin-tuc",U+"2019/10/khoi-lanh-sk.jpg","Hiệu ứng khói hợp với show thời trang, ca nhạc, lễ hội."],
["4-cau-hoi-thuong-gap-ve-may-phun-khoi-cho-san-khau-su-kien-p1","2018-03-20","4 câu hỏi thường gặp về máy phun khói cho sân khấu (phần 1)","tin-tuc",U+"2018/03/may-tao-khoi-la-gi-3-e1746345589921-1.jpg","Giải đáp các thắc mắc phổ biến về máy phun khói."],
["3-tinh-nang-tuyet-voi-cua-may-tao-hieu-ung-tuyet-roi-co-ban-chua-biet","2018-03-20","3 tính năng của máy tạo hiệu ứng tuyết rơi có thể bạn chưa biết","tin-tuc",U+"2017/11/hieu-ung-tao-tuyet-roi.jpg","Làm thế nào hiệu ứng tuyết rơi tạo nên những bông tuyết như thật?"],
["kham-pha-3-buoc-de-co-duoc-san-khau-nhac-hoan-hao","2018-03-18","3 bước để có sân khấu âm nhạc hoàn hảo","tin-tuc",U+"2020/07/phun-khoi.jpg","Thiết kế sân khấu âm nhạc thành công như thế nào?"],
["3-dieu-can-thiet-de-tao-nen-mot-san-khau-su-kien-thanh-cong","2018-03-18","3 điều cần thiết để tạo nên một sân khấu sự kiện thành công","tin-tuc",U+"2019/11/56451994_294855448078547_8935022896267395072_n.jpg","Âm thanh, ánh sáng và hiệu ứng sân khấu."],
["4-ly-ban-nen-chon-sao-mai-effect-de-thuc-hien-hieu-ung-liveshow-p2","2018-03-18","4 lý do nên chọn Newstar Effect cho hiệu ứng liveshow (phần 2)","tin-tuc",U+"2020/07/kim-tuyen-saomai-effect-1-e1746326294481-721x400-1.jpg","Mang lại cho khán giả những giây phút tuyệt vời."],
["4-ly-ban-nen-chon-sao-mai-effect-de-thuc-hien-hieu-ung-liveshow-p1","2018-03-18","4 lý do nên chọn Newstar Effect cho hiệu ứng liveshow (phần 1)","tin-tuc",U+"2019/11/cot-khoi-co2-saomai-effect.jpg","Đơn vị cho thuê thiết bị và dịch vụ hiệu ứng liveshow."],
["cac-loai-may-thuong-dung-de-tao-hieu-ung-cho-san-khau-su-kien-p2","2018-03-16","Các loại máy thường dùng để tạo hiệu ứng sân khấu (phần 2)","tin-tuc",U+"2018/03/hieu-ung-san-khau-dep-mat-3-e1746346726870-1.jpg","Phun sương, tuyết rơi, khói lạnh, bong bóng…"],
["cac-loai-may-thuong-dung-de-tao-hieu-ung-cho-san-khau-su-kien-p1","2018-03-16","Các loại máy thường dùng để tạo hiệu ứng sân khấu (phần 1)","tin-tuc",U+"2017/11/hieu-ung-tao-tuyet-roi.jpg","Chọn thiết bị tạo hiệu ứng cho sân khấu cũng quan trọng như thiết kế."],
["su-dung-hieu-ung-cot-lua-cho-san-khau-nhu-nao-cho-hieu-qua","2018-03-03","Sử dụng hiệu ứng cột lửa cho sân khấu như thế nào cho hiệu quả?","tin-tuc",U+"2018/03/hieu_ung_may_lua.jpg","Kịch bản và cách thể hiện cột lửa chuyên nghiệp."],
["da-mat-voi-hieu-ung-san-khau-su-dung-trong-su-kien-big-offline-bigbang-youth","2018-03-03","Hiệu ứng sân khấu trong sự kiện BIG OFFLINE: BIGBANG “Be Our Youth”","tin-tuc",U+"2018/03/hieu-ung-san-khau-BIGBANG-Be-Our-Youth-2-e1746347329697.jpg","Một đêm offline khó quên tại TP. HCM."],
["mua-phao-kim-tuyen-hay-phao-giay-phao-trang-kim-o-dau","2018-03-01","Mua pháo kim tuyến, pháo giấy, pháo trang kim ở đâu?","tin-tuc",U+"2018/03/mua-phao-kim-tuyen-gia-re-o-dau-3-e1746347558504-459x400.jpg","Pháo kim tuyến cho đám cưới, khai trương và mọi sự kiện."],
["2-thiet-bi-tao-khoi-hien-dai-lam-bung-no-gioi-chuc-su-kien","2018-02-09","2 thiết bị tạo khói hiện đại làm bùng nổ giới tổ chức sự kiện","tin-tuc",U+"2019/11/khoi-lanh_3.jpg","Súng bắn CO2 và máy tạo khói lạnh."],
["3-ly-nen-chon-sao-mai-lam-don-vi-thuc-hien-hieu-ung-phao-hoa-nghe-thuat","2018-02-09","3 lý do chọn Newstar Effect thực hiện pháo hoa nghệ thuật","tin-tuc","","Sự chuyên nghiệp, nhiệt tình và dịch vụ chất lượng."],
["3-luu-y-khi-su-dung-hieu-ung-bong-bong-cho-san-khau-su-kien","2018-02-09","3 lưu ý khi sử dụng hiệu ứng bong bóng cho sân khấu","tin-tuc",U+"2018/02/hieu-ung-bong-bong-re-dep-33-1-e1746347954774-648x400.jpg","An toàn, chuyên nghiệp và phù hợp."],
["nhung-man-mua-tuyet-tren-san-khau-su-kien-se-duoc-tao-ra-nhu-nao","2018-02-08","Những màn “mưa tuyết” trên sân khấu được tạo ra như thế nào?","tin-tuc","","Hiệu ứng tuyết rơi có giống tuyết thật?"],
["nang-tam-san-khau-su-kien-voi-hieu-ung-phao-dien-9m1s","2018-02-08","Nâng tầm sân khấu với hiệu ứng pháo điện 9 m 1 giây","tin-tuc",U+"2020/08/phao-dien-sinh-nhat-e1746323220378.jpg","Sân khấu rực sáng với pháo điện cao, lung linh."],
["3-hieu-ung-music-show-hang-dau-ma-cac-nha-chuc-su-kien-khong-nen-bo-qua","2018-02-08","3 hiệu ứng music show hàng đầu không nên bỏ qua","tin-tuc",U+"2018/02/may-tao-khoi-lanh.jpg","Những hiệu ứng tạo điểm nhấn cho music show."],
["da-mat-voi-hieu-ung-liveshow-cua-noo-phuoc-thinh-tai-ha-noi","2018-02-07","Hiệu ứng liveshow của Noo Phước Thịnh tại Hà Nội","tin-tuc",U+"2018/02/hieu-ung-liveshow3-e1746348799680-3.jpg","Không chỉ đã tai mà còn đã mắt."],
["uu-diem-noi-bat-cua-sung-ban-co2-khi-tao-hieu-ung-khoi-cho-su-kien","2018-02-07","Ưu điểm của súng bắn CO2 khi tạo hiệu ứng khói cho sự kiện","tin-tuc",U+"2018/02/sung-ban-khoi-co2-4-602x400-1.jpg","Vì sao chọn súng bắn CO2?"],
["tu-lam-may-phun-khoi-co2-ngay-tai-nha-tai-sao-khong","2018-02-04","Tự làm máy phun khói CO2 tại nhà, tại sao không?","tin-tuc",U+"2018/02/may-phun-khoi-co2-4-e1746349876423-1.jpg","Bữa tiệc đáng nhớ với chi phí tối ưu."],
["cach-ma-may-phun-lua-tao-hieu-ung-cot-lua-cho-san-khau-su-kien","2018-02-04","Cách máy phun lửa tạo hiệu ứng cột lửa cho sân khấu","tin-tuc",U+"2018/02/admin-ajax.jpg","Cùng tìm hiểu cách máy phun lửa hoạt động."],
["newstar-effect-don-vi-cung-cap-hieu-ung-chuyen-nghiep-cho-san-khau-su-kien","2018-01-26","Newstar Effect – đơn vị cung cấp hiệu ứng chuyên nghiệp cho sân khấu, sự kiện","tin-tuc",U+"2018/03/khoi-lanh-sk.jpg","Đơn vị chuyên cung cấp dịch vụ hiệu ứng sự kiện."],
["thoi-hon-cho-san-khau-su-kien-bang-4-hieu-ung-san-khau-cuc-chat","2018-01-18","Thổi hồn cho sân khấu sự kiện bằng 4 hiệu ứng","tin-tuc",U+"2018/02/admin-ajax.jpg","Biến sự kiện trở nên nổi bật và ấn tượng."],
["2-dac-tinh-noi-bat-cua-dich-vu-cho-thue-hieu-ung-san-khau-su-kien-tai-sao-mai","2018-01-18","2 đặc tính nổi bật của dịch vụ cho thuê hiệu ứng sân khấu","tin-tuc",U+"2018/02/hieu-ung-bong-bong-re-dep-33-1-e1746347954774-648x400.jpg","Hiệu ứng cần đi cùng ý tưởng và kịch bản rõ ràng."],
["3-loai-phao-dien-san-khau-thuong-xuyen-duoc-lua-chon-su-dung-nhat","2018-01-17","3 loại pháo điện sân khấu được chọn nhiều nhất","tin-tuc",U+"2020/08/phao-xoay-saomai-effect-e1746322979977-654x400-2.jpg","Pháo điện rẻ, đẹp, dễ tìm nhà cung cấp."],
["tat-tan-tat-nhung-dieu-can-biet-ve-hieu-ung-cot-lua-san-khau","2018-01-10","Những điều cần biết về hiệu ứng cột lửa sân khấu","tin-tuc",U+"2020/07/may-phun-lua-03-e1746343179266.jpg","Tạo dấu ấn với cột lửa trên sân khấu hoành tráng."],
["phao-xoay-la-gi-va-cac-cach-phan-loai-phao-xoay","2017-12-28","Pháo xoay là gì và cách phân loại pháo xoay","tin-tuc",U+"2017/12/cac-loai-phao-xoay-1-e1746350899142-1.jpg","Loại pháo điện đẹp mắt và độc đáo."],
["hieu-ung-bong-bong-dep-va-re-tai-sao-khong-chon","2017-12-28","Hiệu ứng bong bóng – đẹp và rẻ, tại sao không chọn?","tin-tuc",U+"2017/12/hieu-ung-bong-bong-re-dep-40-e1746409121302-1.jpg","Rẻ, đẹp và siêu dễ tạo."],
["cung-kham-pha-4-hinh-dang-phao-hoa-nghe-thuat-dac-sac-nhat","2017-12-28","4 hình dáng pháo hoa nghệ thuật đặc sắc nhất","tin-tuc",U+"2017/12/hinh-dang-phao-hoa-nghe-thuat-1-e1746410437566-1.jpg","Tham khảo cho sự kiện của bạn."],
["vi-sao-hang-ngan-su-kien-lon-deu-chon-thac-lua-lam-hieu-ung","2017-12-27","Vì sao nhiều sự kiện lớn chọn thác lửa làm hiệu ứng?","tin-tuc",U+"2017/12/thac-lua-5-1-e1746410804954.jpg","Sự kiện sôi động, hoành tráng đều có thác lửa."],
["dinh-nghia-khoi-lanh-va-cach-van-hanh-may-tao-hieu-ung-khoi-lanh","2017-12-27","Khói lạnh là gì và cách vận hành máy tạo khói lạnh","tin-tuc",U+"2017/12/khoi-lanh-13-e1746411618673-1.jpg","Không gian bồng bềnh, lãng mạn đến từ đâu?"],
["huong-dan-su-dung-phao-dien-dam-cuoi-dep-mat-va-toan","2017-12-27","Hướng dẫn sử dụng pháo điện đám cưới đẹp mắt và an toàn","tin-tuc",U+"2017/12/phao-dien-cho-dam-cuoi-1-e1746412922397-1.jpg","Sử dụng pháo điện đám cưới đúng cách."],
["cac-loai-may-tao-hieu-ung-tuyet-roi-tuyet-dep-cho-san-khau-p3","2017-12-23","Các loại máy tạo hiệu ứng tuyết rơi cho sân khấu (phần 3)","tin-tuc",U+"2018/02/may-phun-hieu-ung-tuyet-roi-9-e1746348046797.jpg","Trang trí cho tiệc Noel và sân khấu."],
["cac-loai-may-tao-hieu-ung-tuyet-roi-tuyet-dep-cho-san-khau-p2","2017-12-22","Các loại máy tạo hiệu ứng tuyết rơi cho sân khấu (phần 2)","tin-tuc",U+"2017/12/may-phun-hieu-ung-tuyet-roi-1-e1746413916687-1.jpg","Trang trí cho tiệc Noel và sân khấu."],
["cac-loai-may-tao-hieu-ung-tuyet-roi-tuyet-dep-cho-san-khau-p1","2017-12-20","Các loại máy tạo hiệu ứng tuyết rơi cho sân khấu (phần 1)","tin-tuc",U+"2017/12/hieu-ung-tuyet-roi-2-e1746414232688.jpg","Trang trí cho tiệc Noel và sân khấu."],
["lam-sao-de-tao-hieu-ung-bong-bong-cho-san-khau-su-kien","2017-12-20","Làm sao để tạo hiệu ứng bong bóng cho sân khấu sự kiện?","tin-tuc",U+"2017/12/hieu-ung-bong-bong-06-e1746414511619-1.jpg","Hiệu ứng cho sự kiện thiếu nhi và đám cưới."],
["hieu-ung-phao-xoay-duoc-tao-ra-nhu-nao","2017-12-19","Hiệu ứng pháo xoay được tạo ra như thế nào?","tin-tuc",U+"2017/12/phao-xoay-2-e1746414795513-1.jpg","Hình ảnh quen thuộc trên sân khấu nghệ thuật."],
["giai-dap-2-cau-hoi-ve-phao-hoa-nghe-thuat-tam-thap","2017-12-19","Giải đáp 2 câu hỏi về pháo hoa nghệ thuật tầm thấp","tin-tuc",U+"2017/12/phao-hoa-nghe-thuat-tam-thap-3-1.jpg","Pháo hoa cho lễ đón năm mới và lễ kỷ niệm."],
["4-loai-san-khau-su-kien-thuong-xuyen-su-dung-phao-kim-tuyen","2017-12-19","4 loại sân khấu thường xuyên sử dụng pháo kim tuyến","tin-tuc",U+"2017/12/phao-kim-tuyen-1-1-1.jpg","Pháo kim tuyến được dùng rộng rãi trên nhiều sân khấu."],
["hieu-ung-thac-phao-cua-sao-mai-da-dang-toan-va-sieu-dep","2017-12-19","Hiệu ứng thác pháo đa dạng, an toàn và đẹp","tin-tuc",U+"2017/12/thac-lua-8.jpg","Điểm nhấn quen thuộc trên sân khấu ca nhạc."],
["may-thoi-giay-kim-tuyen-thuong-duoc-dung-trong-nhung-san-khau-su-kien-nao","2017-11-30","Máy thổi giấy kim tuyến thường dùng trong sân khấu nào?","tin-tuc",U+"2017/11/may-thoi-giay-kim-tuyen-3-1.jpg","Hầu hết nhà tổ chức sự kiện đều cần đến."],
["phao-hoa-nghe-thuat-thuong-duoc-ban-vao-nhung-dip-nao-trong-nam-p2","2017-11-07","Pháo hoa nghệ thuật thường bắn vào dịp nào trong năm? (phần 2)","tin-tuc",U+"2017/11/phao-hoa-nghe-thuat-01-1-1.jpg","Những dịp lễ, tết có pháo hoa."],
["phao-hoa-nghe-thuat-thuong-duoc-ban-vao-nhung-dip-nao-trong-nam-p1","2017-11-07","Pháo hoa nghệ thuật thường bắn vào dịp nào trong năm? (phần 1)","tin-tuc",U+"2017/11/phao-hoa-nghe-thuat-01-1-1.jpg","Những dịp lễ, tết có pháo hoa."],
["nhung-san-khau-su-kien-thuong-su-dung-hieu-ung-phao-dien-p3","2017-11-07","Những sân khấu thường sử dụng pháo điện (phần 3)","tin-tuc",U+"2017/11/phao-dien-le-trao-giai-2-1.jpg","Pháo điện trên sân khấu lớn, vừa và nhỏ."],
["nhung-san-khau-su-kien-thuong-su-dung-hieu-ung-phao-dien-p2","2017-11-07","Những sân khấu thường sử dụng pháo điện (phần 2)","tin-tuc",U+"2017/11/phao-dien-le-khanh-thanh-2-2.jpg","Pháo điện trên sân khấu lớn, vừa và nhỏ."],
["nhung-san-khau-su-kien-thuong-su-dung-hieu-ung-phao-dien-p1","2017-11-07","Những sân khấu thường sử dụng pháo điện (phần 1)","tin-tuc",U+"2017/11/phao-kim-tuyen-1-1.jpg","Pháo điện trên sân khấu lớn, vừa và nhỏ."],
["3-dieu-can-biet-ve-hieu-ung-cot-lua-cho-san-khau-bieu-dien","2017-11-07","3 điều cần biết về hiệu ứng cột lửa cho sân khấu biểu diễn","tin-tuc",U+"2017/11/may-phun-lua-03-e1746343179266.jpg","Kiến thức trước khi dàn dựng cột lửa."],
["chiem-nguong-hieu-ung-phao-phut-1s-cao-10m-lung-linh-tuyet-dep","2017-11-07","Hiệu ứng pháo phụt 1 giây cao 10 m","tin-tuc",U+"2017/11/phao-phut-1s-cao-10m-1-1.jpg","Một trong những hiệu ứng pháo đẹp nhất."],
["hieu-ung-thac-lua-thuong-duoc-su-dung-trong-nhung-su-kien-nao","2017-11-07","Hiệu ứng thác lửa thường dùng trong những sự kiện nào?","tin-tuc",U+"2017/11/thac-lua-8-1.jpg","Thác lửa hay thác pháo trên sân khấu."],
["lam-sao-de-co-hieu-ung-tuyet-roi-tuyet-dep-cho-san-khau-su-kien","2017-11-07","Làm sao để có hiệu ứng tuyết rơi đẹp cho sân khấu?","tin-tuc",U+"2017/11/hieu-ung-tuyet-roi-6-1.jpg","Chuẩn bị cho mùa Noel."],
["diem-danh-3-loai-may-phun-khoi-lanh-thong-dung-nhat-hien-nay","2017-11-07","3 loại máy phun khói lạnh thông dụng nhất","tin-tuc",U+"2017/11/may-phun-khoi-lanh6-1-1.jpg","Thiết bị quan trọng cho hiệu ứng ánh sáng."],
["phao-lua-thuong-duoc-su-dung-trong-nhung-su-kien-nao","2017-11-07","Pháo lửa thường dùng trong những sự kiện nào?","tin-tuc",U+"2017/11/phao-dien-dam-cuoi-9-600x400-1.jpg","Pháo lửa hay pháo điện trên sân khấu."],
["7-hieu-ung-phao-thuong-duoc-su-dung-trong-san-khau-su-kien-p2","2017-11-07","7 hiệu ứng pháo thường dùng trong sân khấu (phần 2)","tin-tuc",U+"2017/11/thac-lua-8-1.jpg","Hiệu ứng làm chương trình sôi động."],
["7-hieu-ung-phao-thuong-duoc-su-dung-trong-san-khau-su-kien-p1","2017-11-07","7 hiệu ứng pháo thường dùng trong sân khấu (phần 1)","tin-tuc",U+"2017/11/hieu-ung-phao-xoay-280x194-1.jpg","Pháo hoa, pháo giấy, pháo kim tuyến, pháo điện."],
["dia-chi-mua-va-cho-thue-may-ban-phao-ong-phao-kim-tuyen-gia-re-tai-tphcm","2017-11-07","Địa chỉ mua và cho thuê máy bắn pháo kim tuyến tại TP. HCM","tin-tuc",U+"2017/11/may-thoi-giay-kim-tuyen-1-1.jpg","Dùng cho đám cưới, khai trương."],
["khoi-lanh-la-gi-va-khi-nao-nen-dung-hieu-ung-khoi-lanh","2017-11-07","Khói lạnh là gì và khi nào nên dùng?","tin-tuc",U+"2018/03/khoi-lanh-sk.jpg","Hiệu ứng nghệ thuật phổ biến trên sân khấu, phim ảnh."]
  ],

  /* Bài viết mẫu có nội dung đầy đủ để minh họa giao diện đọc bài */
  sampleArticle: {
    slug: "cot-khoi-co2-la-gi",
    body: [
      ["p","Bạn từng rất ấn tượng với hình ảnh cột khói CO2 trên các sân khấu biểu diễn nghệ thuật và muốn tìm hiểu hiệu ứng này là gì? Bài viết này sẽ giúp bạn có những thông tin cần biết."],
      ["p","Cột khói CO2 là một trong những hiệu ứng sân khấu mang đến dấu ấn khó quên cho sự kiện. Ai làm trong ngành tổ chức sự kiện cũng nên hiểu hiệu ứng này, cũng như cách đặt dịch vụ hoặc mua thiết bị tạo ra nó."],
      ["h2","Cột khói CO2 là gì?"],
      ["p","Cột khói CO2 là hiệu ứng tạo hình ảnh ngoạn mục vào thời điểm cao trào, tác động mạnh đến thị giác người xem. Khói từ máy phun CO2 phụt mạnh liên tục thành cột với độ cao 2 – 5 m, 5 – 8 m hoặc 8 – 12 m, thường đi kèm ánh sáng và âm thanh rực rỡ."],
      ["img", U+"2019/11/cot-khoi-co2-saomai-effect.jpg"],
      ["p","Cột khói CO2 giúp sân khấu bất ngờ, ấn tượng hơn với những cột khói phụt lên đúng thời điểm cần điểm nhấn. Hiệu ứng an toàn, linh hoạt và có thể thay thế phun lửa ở những nơi không được dùng lửa."],
      ["h2","Newstar Effect có gói dịch vụ hay sản phẩm tạo cột khói CO2 nào?"],
      ["p","Newstar Effect cung cấp dịch vụ tạo hiệu ứng cột khói CO2 theo yêu cầu, cho thuê máy phun cột khói CO2 và bán 2 dòng máy cỡ lớn, cỡ nhỏ. Tùy mục đích, bạn có thể chọn gói dịch vụ trọn gói hoặc mua máy phù hợp."],
      ["p","Đội kỹ thuật lên kịch bản thời điểm bắn, chọn độ cao và kích thước cột khói phù hợp sân khấu, giúp hiệu ứng xuất hiện đúng lúc và an toàn."]
    ]
  }
};

/* Chuyên mục chính của từng bài theo đường dẫn thật trên web cũ (/{chuyen-muc}/{slug}). Bài không có trong danh sách thuộc "tin-tuc". */
(() => {
  const primary = {
    "uncategorized": ["thiet-bi-khoi-lanh-n2-giai-phap-tao-hieu-ung-khoi-sat-san-cho-san-khau-va-su-kien"],
    "dich-vu": ["hieu-ung-khoi-lanh-san-khau-su-kien-tron-goi-hung-sao-mai-effect","3-goi-dich-vu-hieu-ung-khoi-lanh-san-khau-cua-sao-mai-effect"],
    "hoi-dap": ["thue-may-ban-kim-tuyen"],
    "chia-se": ["may-ban-kim-tuyen-dung-trong-san-khau-su-kien-nao"],
    "thong-tin-san-pham": ["vi-sao-may-ban-kim-tuyen-2-nong-duoc-ua-chuong","2-dong-may-ban-kim-tuyen-gia-re","2-dong-san-pham-sung-phun-khoi-co2","2-dong-may-tao-cot-khoi-co2-hot-nhat","cot-khoi-co2-la-gi","3-dong-may-tao-khoi-nang-thong-dung-nhat","gia-man-sao-san-khau-tinh-nhu-the-nao","nhung-kieu-mau-man-sao-su-kien","nhung-dieu-can-biet-ve-bieu-dien-phao-hoa-thuat-theo-am-nhac","phao-hoa-nghe-thuat-la-gi-va-no-thuong-duoc-su-dung-trong-nhung-su-kien-nao","dich-vu-cho-thue-may-phut-lua-cong-nghe-moi-cua-sao-mai-effect","may-phun-lua-cao-10m-thiet-bi-khong-the-thieu-trong-cac-show-ca-nhac-edm-dang-cap","loai-may-thoi-kim-tuyen-nao-duoc-cac-nha-to-chuc-su-kien-yeu-thich-nhat","tim-hieu-ve-may-phun-cot-khoi-co2-tren-cac-san-khau-su-kien"]
  };
  const map = {}; Object.entries(primary).forEach(([c, list]) => list.forEach(s => map[s] = c));
  window.NS.posts.forEach(p => { p[3] = map[p[0]] || "tin-tuc"; });
  window.NS.postCats["hoi-dap"] = "Hỏi đáp";
})();

/* ===== Bổ sung theo Redesign Blueprint ===== */
(() => {
  const D = window.NS;
  /* Từ khoá để tìm bài viết liên quan cho từng hiệu ứng */
  const kw = {
    "khoi-lanh": ["khói lạnh", "khói nặng", "máy phun khói", "tạo khói"], "tao-tuyet": ["tuyết"], "bong-bong": ["bong bóng"],
    "man-mua": ["màn mưa", "thác nước"], "cot-khoi-co2": ["co2"], "phun-lua": ["phun lửa", "cột lửa", "phụt lửa"],
    "phao-1-giay": ["1 giây", "1s", "9m1s"], "phao-30s": ["30s", "pháo điện", "pháo lửa"], "phao-phut-xanh-do": ["pháo phụt", "pháo sân khấu"],
    "thoi-giay-kim-tuyen": ["kim tuyến", "thổi giấy"], "phao-giay-trang-kim": ["pháo giấy", "trang kim", "pháo kim tuyến"], "phao-xoay": ["pháo xoay"],
    "phao-hoa-nghe-thuat": ["pháo hoa"], "thac-phao": ["thác pháo", "thác lửa"], "duong-lua-vong-lua": ["cột lửa", "đường lửa"],
    "man-sao": ["màn sao"], "kich-ban-rieng": ["lập trình", "theo nhạc", "kịch bản"]
  };
  D.effects.forEach(e => e.kw = kw[e.s] || []);

  /* 7 loại sự kiện cho bộ lọc dự án (blueprint) */
  D.projectCats = [
    ["concert", "Concert & ca nhạc"], ["festival", "Lễ hội"], ["brand", "Ra mắt thương hiệu"], ["corp", "Sự kiện doanh nghiệp"],
    ["wedding", "Tiệc cưới, tiệc riêng"], ["sports", "Thể thao"], ["special", "Sự kiện đặc biệt"]
  ];

  /* Nhóm "Insights" cho trang Tin tức (blueprint): Tin tức · Kiến thức hiệu ứng · Hậu trường · Xu hướng sự kiện.
     Đường dẫn chuyên mục cũ vẫn giữ để không mất SEO. */
  D.insightGroups = [["tin-tuc", "Tin tức"], ["kien-thuc", "Kiến thức hiệu ứng"], ["hau-truong", "Hậu trường"], ["xu-huong", "Xu hướng sự kiện"]];
  D.insightOf = p => {
    const [slug, , title, cat] = p;
    if (/^da-mat-voi|liveshow|bigbang/.test(slug)) return "hau-truong";
    if (cat === "thong-tin-san-pham" || cat === "hoi-dap" || /là gì|cách |làm sao|hướng dẫn|câu hỏi|điểm danh|các loại|tìm hiểu/i.test(title)) return "kien-thuc";
    if (cat === "chia-se" || /ưa chuộng|xu hướng|thường được|thường dùng|thường xuyên|những sân khấu|những sự kiện/i.test(title)) return "xu-huong";
    return "tin-tuc";
  };

  /* Quy trình 8 bước (blueprint) */
  D.process = [
    ["Tiếp nhận yêu cầu", "Bạn gửi loại sự kiện, ngày, địa điểm, quy mô."],
    ["Tư vấn kỹ thuật", "Đội kỹ thuật hỏi kỹ sân khấu, tiết mục, ngân sách."],
    ["Chọn hiệu ứng", "Đề xuất hiệu ứng phù hợp, gửi báo giá chi tiết."],
    ["Lên kịch bản cue", "Hiệu ứng nào, lúc nào, ở vị trí nào trong chương trình."],
    ["Khảo sát & chuẩn bị", "Kiểm tra mặt bằng, nguồn điện, kiểm định thiết bị."],
    ["Lắp đặt & chạy thử", "Lắp đặt, tổng duyệt cùng đạo diễn và âm thanh ánh sáng."],
    ["Vận hành chương trình", "Kỹ thuật viên điều khiển trực tiếp suốt chương trình."],
    ["Hỗ trợ sau sự kiện", "Thu dọn, kiểm tra thiết bị, gửi hình ảnh nghiệm thu."]
  ];
})();
