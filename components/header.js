const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
   <nav class="colorlib-nav" role="navigation">
      <div class="top-menu">
        <div class="container">
          <div class="row">
            <div class="col-md-3 text-center">
              <div id="colorlib-logo"><a href="index.html">Đất Gia Lai 24h</a></div>
            </div>
            <div class="col-md-9 text-right menu-1">
              <ul>
                <li class="active"><a href="index.html">Home</a></li>
                <li class="has-dropdown">
                  <a href="#">Dịch vụ</a>
                  <ul class="dropdown">
                    <li><a href="#">Kí gởi nhà đất</a></li>
                    <li><a href="#">Tra cứu thông tin hành chính</a></li>
                    <li><a href="#">Hỗ trợ pháp lý</a></li>
                  </ul>
                </li>
                <li><a href="#">Tin tức</a></li>
                <li><a href="#">Bài viết</a></li>
                <li><a href="#">Về chúng tôi</a></li>
                <li><a href="#">Liên hệ</a></li>
                <!-- <li class="btn-cta"><a href="#">Sign Up</a></li>
                <li class="btn-cta"><a href="#">Login</a></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const shadowRoot = this.attachShadow({ mode: 'closed' });

    // shadowRoot.appendChild(footerTemplate.content);
    this.innerHTML = headerTemplate.innerHTML
  }
}

customElements.define('header-component', Header);