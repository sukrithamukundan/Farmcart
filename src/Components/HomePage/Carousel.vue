<template>
  <section class="carousel">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/ajum.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Agrigator expects to register GMV of Rs 400 crore in FY23</h3>
            <p>
              Agrigator, an agricultural supply chain platform, said it expects
              to register a gross merchandise value of Rs400 crore in FY23, a
              five fold jump from the current fiscal, cashing in on the
              increased need for agri-product supply chain and automation across
              operations.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="@/assets/ajum.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Agri exports likely to cross $50 bn this fiscal: Commerce Ministry</h3>
            <p>
              The country's exports of agricultural products, including marine and plantation goods, increased 23.21 per cent to USD 31.05 billion in April-November 2021 and is expected to cross USD 50 billion for the "first time" this fiscal, the commerce ministry said on Thursday.
            </p>
          </div>

        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/ajum.jpg" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Call for application/nomination for the three posts of Member, Agricultural Scientists Recruitment Board (ASRB), Department of Agricultural Research & Education (DARE)</h3>
            <p>
              Applications are invited for three posts of Member, Agricultural Scientists Recruitment
Board (ASRB), Department of Agricultural Research & Education (DARE), Government of
India
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped></style>
