<template>
  <div id="app">
    <menuItem /> 
    <div class="mainArea">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import menuItem from "./components/menuItem";

export default {
  name: "app",
  components: {
    menuItem
  },
};
</script>
<style>
.mainArea
{
  display: flex;
  flex-flow: column;
  align-items: center;
}

.myButton {
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	border-radius:5px;
	border:1px solid #566963;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
	text-shadow:0px -1px 0px #2b665e;
}
.myButton:hover {
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>
