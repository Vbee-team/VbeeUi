<template>
    <section>
        <section-carousel :ca="se.swipers"></section-carousel>
        <section-goods :go="se.channel"></section-goods>
        <section-discount :ds="se"></section-discount>
        <section-grap :ap="se.grap"></section-grap>
        <section-snap :sn="se.snap"></section-snap>
        <section-new :ne="se.new"></section-new>
    </section>
</template>

<script>
    import SectionCarousel from "./SectionCarousel";
    import SectionGoods from "./SectionGoods";
    import SectionDiscount from "./SectionDiscount";
    import SectionGrap from "./SectionGrap";
    import SectionSnap from "./SectionSnap";
    import SectionNew from "./SectionNew";
    export default {
        name: "IndexSection",
      props:["se"],
      components: {SectionNew, SectionSnap, SectionGrap, SectionDiscount, SectionGoods, SectionCarousel}
    }
</script>

<style scoped>

</style>
