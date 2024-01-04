
<script>
  export let type = "primary";
  export let label = "Button";

  function getButtonClass() {
    return type === "primary" ? "primary-button" : "secondary-button";
  }
</script>

<button class="{getButtonClass()}">{label}</button>

<style>
  .primary-button {
    background-color: rgb(19, 19, 19);
    color: white;
    width: 180px;
    height: 50px;
    border-radius: 10px;
  }

  .secondary-button {
    background-color: rgb(255, 255, 255);
    color: black;
    width: 180px;
    height: 50px;
    border-radius: 10px;
  }
</style>
