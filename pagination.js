  

  document.addEventListener('DOMContentLoaded', () => {
    const blogData = {
        1: `
          <div class="blog-content">
      <div class="left-col">
        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/noodle.png" alt="" />
          </a>

          <div class="blog-content-info">
            <h3>Crochet Projects for Noodle Lovers</h3>
            <div class="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>

            <div class="about-author">
              <div class="about-author-name">
                <img src="assets/img/Ellipse 2.png" alt="" />
                John Smith
                <div class="vl"></div>
                15 March 2022
              </div>
            </div>
          </div>
        </div>
        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/noodle.png" alt="" />
          </a>

          <div class="blog-content-info">
            <h3>Crochet Projects for Noodle Lovers</h3>
            <div class="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>

            <div class="about-author">
              <div class="about-author-name">
                <img src="assets/img/Ellipse 2.png" alt="" />
                John Smith
                <div class="vl"></div>
                15 March 2022
              </div>
            </div>
          </div>
        </div>
        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/noodle.png" alt="" />
          </a>

          <div class="blog-content-info">
            <h3>Crochet Projects for Noodle Lovers</h3>
            <div class="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>

            <div class="about-author">
              <div class="about-author-name">
                <img src="assets/img/Ellipse 2.png" alt="" />
                John Smith
                <div class="vl"></div>
                15 March 2022
              </div>
            </div>
          </div>
        </div>

        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/noodle.png" alt="" />
          </a>

          <div class="blog-content-info">
            <h3>Crochet Projects for Noodle Lovers</h3>
            <div class="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>

            <div class="about-author">
              <div class="about-author-name">
                <img src="assets/img/Ellipse 2.png" alt="" />
                John Smith
                <div class="vl"></div>
                15 March 2022
              </div>
            </div>
          </div>
        </div>
        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/noodle.png" alt="" />
          </a>

          <div class="blog-content-info">
            <h3>Crochet Projects for Noodle Lovers</h3>
            <div class="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>

            <div class="about-author">
              <div class="about-author-name">
                <img src="assets/img/Ellipse 2.png" alt="" />
                John Smith
                <div class="vl"></div>
                15 March 2022
              </div>
            </div>
        `,
        2: `
        <div class="blog-content-page">
          <a href="">
            <img src="assets/img/salad.png" alt="Garden Fresh Salad" />
          </a>
          <div class="blog-content-info">
            <h3>Garden Fresh Salad</h3>
            <p>
              A delightful combination of greens, nuts, and a drizzle of balsamic glaze.
            </p>
          </div>
        </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/noodle.png" alt="Noodle Fiesta" />
            </a>
            <div class="blog-content-info">
              <h3>Noodle Fiesta</h3>
              <p>
                Treat yourself to a bowl of noodles packed with bold spices and vibrant flavors.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/lasagna.png" alt="Cheesy Lasagna" />
            </a>
            <div class="blog-content-info">
              <h3>Cheesy Lasagna</h3>
              <p>
                Enjoy the ultimate comfort food made with layers of creamy and cheesy goodness.
              </p>
            </div>
          </div><div class="blog-content-page">
            <a href="">
              <img src="assets/img/noodle.png" alt="Noodle Fiesta" />
            </a>
            <div class="blog-content-info">
              <h3>Noodle Fiesta</h3>
              <p>
                Treat yourself to a bowl of noodles packed with bold spices and vibrant flavors.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/lasagna.png" alt="Cheesy Lasagna" />
            </a>
            <div class="blog-content-info">
              <h3>Cheesy Lasagna</h3>
              <p>
                Enjoy the ultimate comfort food made with layers of creamy and cheesy goodness.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/salad.png" alt="Garden Fresh Salad" />
            </a>
            <div class="blog-content-info">
              <h3>Garden Fresh Salad</h3>
              <p>
                A delightful combination of greens, nuts, and a drizzle of balsamic glaze.
              </p>
            </div>
          </div>
        `,
        3: `
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/noodle.png" alt="Spicy Noodles" />
            </a>
            <div class="blog-content-info">
              <h3>Spicy Noodles</h3>
              <p>
                Turn up the heat with these noodles, a perfect blend of spices and flavors.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/salad.png" alt="Colorful Salad" />
            </a>
            <div class="blog-content-info">
              <h3>Colorful Salad</h3>
              <p>
                A burst of colors and flavors with fresh veggies, fruits, and a tangy dressing.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/lasagna.png" alt="Vegetarian Lasagna" />
            </a>
            <div class="blog-content-info">
              <h3>Vegetarian Lasagna</h3>
              <p>
                A healthy twist on the classic recipe with layers of roasted vegetables and cheese.
              </p>
            </div>
          </div><div class="blog-content-page">
            <a href="">
              <img src="assets/img/noodle.png" alt="Spicy Noodles" />
            </a>
            <div class="blog-content-info">
              <h3>Spicy Noodles</h3>
              <p>
                Turn up the heat with these noodles, a perfect blend of spices and flavors.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/salad.png" alt="Colorful Salad" />
            </a>
            <div class="blog-content-info">
              <h3>Colorful Salad</h3>
              <p>
                A burst of colors and flavors with fresh veggies, fruits, and a tangy dressing.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/lasagna.png" alt="Vegetarian Lasagna" />
            </a>
            <div class="blog-content-info">
              <h3>Vegetarian Lasagna</h3>
              <p>
                A healthy twist on the classic recipe with layers of roasted vegetables and cheese.
              </p>
            </div>
          </div>
        `,
        4: `
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/noodle.png" alt="Noodle Delight" />
            </a>
            <div class="blog-content-info">
              <h3>Noodle Delight</h3>
              <p>
                Savor the comforting taste of warm noodles topped with your favorite sauce.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/salad.png" alt="Simple Salad" />
            </a>
            <div class="blog-content-info">
              <h3>Simple Salad</h3>
              <p>
                A light and simple salad that pairs perfectly with any meal.
              </p>
            </div>
          </div>
          <div class="blog-content-page">
            <a href="">
              <img src="assets/img/lasagna.png" alt="Classic Lasagna" />
            </a>
            <div class="blog-content-info">
              <h3>Classic Lasagna</h3>
              <p>
                A timeless favorite made with love and baked to perfection.
              </p>
            </div>
          </div>
        `,
      };
      
      
      
       // Sayfa numaralarını dinle
  const pageButtons = document.querySelectorAll('.page-number');
  const blogContent = document.querySelector('.left-col');

  pageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // Aktif sayfa butonunu güncelle
      pageButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // İçeriği güncelle
      const page = event.target.getAttribute('data-page');
      blogContent.innerHTML = blogData[page];
    });
  });

  // Sayfa açıldığında otomatik olarak 1. sayfayı yükle ve butonunu aktif et
  const firstPageButton = document.querySelector('.page-number[data-page="1"]');
  if (firstPageButton) {
    
    firstPageButton.click();
  }
    });

  
  

