<template>
  <section class="about-us">
    <div class="row p-5 pt-7">
      <div class="col-6">
        <img class="float-lg-right" src="@/assets/anew.jpg" />
      </div>
      <div class="col-12 col-sm-6 container">
        <h1>Why buy organic spices?</h1>
        <h6><b>Author:Dr. Ssancheti</b></h6>
        <h6>Date: August 14, 2020</h6>
        <h6>
          What is organic food and why is it beneficial? Organic foods are grown
          without pesticides or artificial growth inhibitors or hormones without
          using synthetic chemicals. Switching to organic food can be a little
          costly but then after we know its perks its certainly worth the
          expense. Spices provide countless health benefits of their own, apart
          from adding spice and color to the food. The Indian cuisine asks for
          spices as must-have ingredients for different meals. Spices offer a
          spicy complement to meals, and give almost every meal preparation a
          dimension. When spices form quite an important part of every cuisine,
          so now more and more customers are expecting organic spices. So here
          are few reasons of why should we buy organic spices
        </h6>
        <div class="row pt-2">
          <div class="col-3">
            <button type="button" class="btn btn-outline-dark">
              Read more
            </button>
          </div>
          <div class="col-2">
            <router-link class="dropdown-item" to="/contact"
              ><button type="button" class="btn btn-outline-dark">
                Contact Author
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row p-5 ">
      <div
        class="container col-12 col-sm-6 text-sm-right text-md-right text-lg-right order-sm-first order-12"
      >
        <h1>Keep Your Tractor Battery Healthy: Best Tips by KhetiGaadi</h1>
        <h6><b>Author: KhetiGaadi</b></h6>
        <h6>Date: January 7, 2022</h6>
        <h6>
          A tractor battery goes through extreme temperature vacillations during
          its life expectancy. The huge hotness delivered by the motor quickly
          disintegrates the battery limit. In cold climate conditions, a battery
          can endure up to five to six years through during warm climate
          conditions the life expectancy of the battery gets diminished to right
          around three years. The battery (Tractor) gets constantly charged by
          the alternator when the tractor is on and running. At the point when
          the tractor is left inactive for a very long time, it quickly loses
          the charge of the battery and then goes past the base degree of charge
          needed to begin the tractor. At the point when this situation endures
          for intermittent occasions, the life expectancy of the battery decays
          leaving your tractor weak against unexpected breakdown.
        </h6>
        <div class="row text-right">
          <div class="col-6"></div>
          <div class="col-3">
            <button type="button" class="btn btn-outline-dark">
              Read more
            </button>
          </div>
          <div class="col-3">
            <router-link class="dropdown-item" to="/contact"
              ><button type="button" class="btn btn-outline-dark">
                Contact Author
              </button></router-link
            >
          </div>
        </div>
      </div>
      <div class="col-6">
        <img src="@/assets/a33.jpg" />
      </div>
    </div>
    <div class="row p-5">
      <div class="col-6">
        <img class="float-lg-right" src="@/assets/a34.jpg" />
      </div>
      <div class="col-12 col-sm-6 container">
        <h1>How to Start a livestock Farming Business?</h1>
        <h6><b>Author: Annonymous</b></h6>
        <h6>Date: 24.MAY.2021</h6>
        <h6>
          The goat and sheep farming business is filled with opportunities. You
          can sell dairy products to animal meat at local fairs or markets. It
          is a small-scale business that can be highly profitable if you do it
          with a proper strategy and planning. It is a multi-layered process and
          requires a business plan that is sorted, clear, and concise. To start
          a livestock farming business, you need a business plan, allocation or
          a piece of land, and capital for your business. Initially, you can
          start your business with a couple of sheep and cows. Once your
          business grows, you can have more livestock. You might end up turning
          your business into a thriving livestock farm. Let us look at some
          steps to start a livestock farming business.
        </h6>
        <div class="row pt-2 ">
          <div class="col-3">
            <button type="button" class="btn btn-outline-dark">
              Read more
            </button>
          </div>
          <div class="col-3">
            <router-link class="dropdown-item" to="/contact"
              ><button type="button" class="btn btn-outline-dark">
                Contact Author
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us img {
  width: 90%;
  min-width: 380px;
}
</style>
