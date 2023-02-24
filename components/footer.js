const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <footer id="colorlib-footer">
    <div class="newsletter">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-pb-md">
          <div class="col-md-3 colorlib-widget">
            <h4>Về Đất Gia Lai 24h</h4>
            <p></p>
            <p>
            <ul class="colorlib-social-icons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100076409421346"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
              <li><a href="#"><i class="icon-dribbble"></i></a></li>
            </ul>
            </p>
          </div>
          <div class="col-md-3 colorlib-widget">
            <h4>Thông tin chung</h4>
            <p>
            <ul class="colorlib-footer-links">
              <li><a href="#"><i class="icon-check"></i> Về chúng tôi</a></li>
              <li><a href="#"><i class="icon-check"></i> Chính sách bảo mật</a></li>
              <li><a href="#"><i class="icon-check"></i> Điều khoản sử dụng</a></li>
              <li><a href="#"><i class="icon-check"></i> Liên hệ</a></li>
            </ul>
            </p>
          </div>
          <div class="col-md-3 colorlib-widget">
            <h4>Bài đăng mới</h4>
            <div class="f-blog">
              <a href="#" class="blog-img" style="background-image: url(images/blog-1.jpg);">
              </a>
              <div class="desc">
                <h2><a href="#">Hướng dẫn tra cứu thông tin quy hoạch</a></h2>
                <p class="admin"><span>02 tháng 03 năm 2023</span></p>
              </div>
            </div>
            <div class="f-blog">
              <a href="blog.html" class="blog-img" style="background-image: url(images/blog-2.jpg);">
              </a>
              <div class="desc">
                <h2><a href="blog.html">Những điều cần lưu ý khi mua bán đất 2023</a></h2>
                <p class="admin"><span>01 tháng 03 năm 2023</span></p>
              </div>
            </div>
            <div class="f-blog">
              <a href="blog.html" class="blog-img" style="background-image: url(images/blog-3.jpg);">
              </a>
              <div class="desc">
                <h2><a href="blog.html">Phải làm gì khi mua nhầm đất quy hoạch</a></h2>
                <p class="admin"><span>01 tháng 03 năm 2023</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-3 colorlib-widget">
            <h4>Thông tin liên hệ</h4>
            <ul class="colorlib-footer-links">
              <li>Số 347 đường Lê Duẩn <br> Tp Pleiku - Gia Lai</li>
              <li><a href="tel://0979743345"><i class="icon-phone"></i>   +84979743345</a></li>
              <li><a
                  href="mailto:bdsnguyensuong@gmail.com"><i
                    class="icon-envelope"></i>bdsnguyensuong@gmail.com</a></li>
              <li><a href="http://datgialai24h.com/"><i class="icon-location4"></i> datgialai24h.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copy">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                <small class="block">
                  Copyright &copy;
                  <script data-cfasync="false"
                    src="https://preview.colorlib.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                  <script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="http://datgialai24h.com/"
                    target="_blank">Đất Gia Lai 24h</a>
                </small><br>
              </p>
            </div>
          </div>
        </div>
      </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const shadowRoot = this.attachShadow({ mode: 'closed' });

    // shadowRoot.appendChild(footerTemplate.content);
    this.innerHTML = footerTemplate.innerHTML
  }
}

customElements.define('footer-component', Footer);