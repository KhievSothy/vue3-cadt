<template>
    <CoursesCard v-for="(item, index) in courses"
    :key="index"
    :title="courses.title"
    :price="courses.price"
    :description="courses.shortDescription">
    </CoursesCard>

  </template>
<script>
import Card from "@/components/cards/CourseCard.vue";
import axios from "axios";
export default{
    components:{Card},
    data(){
        return{
            courses:[],
        };
    },
    async created(){
        //Call API to get course data
        //const url = "curl 172.23.129.202/v1/course";
        //Promise and Async
        const response = await axios.get("/v1/course");
        const courses = response.data;
        this.courses = courses;
        console.log(courses)
    },
};
</script>