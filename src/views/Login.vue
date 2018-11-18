<!--eslint-disable-->
<template>
  <div>
        <div class="container pt-5 pb-4">
	<div class="row py-5">
		<div class="col-sm-12 col-md-10 offset-md-1">
            <!-- <div class="col-sm-12 col-md-4 offset-md-4">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			</div> -->
            <div class="col-sm-12 col-md-6 offset-md-3">
            <div class="card my-3">
                <!-- <div class="col-sm-12 col-md-4 offset-md-4 text-center">
				    <router-link  to="/quickmed"><img src="i/logo2.png" class="img img-fluid"></router-link>
			    </div>  -->
                <!-- <img class="card-img-top" src="@/assets/logo2.png" alt="Card image cap"> -->
                <div class="card-body">
                    <h3 class="card-title text-center">Login</h3>
                    <form class="px-sm-0 px-md-4 py-3">
                        <!-- <div class="form-group">
                        <label for="email">Email Address</label>

                        <input type="email" class="form-control" id="email"  required>
                        </div> -->
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="emailPrepend"><i class="fa fa-envelope"></i></span>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com" aria-describedby="emailPrepend" v-model="credentials.email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="passwordPrepend"><i class="fa fa-unlock-alt"></i></span>
                                </div>
                                <input type="password" class="form-control" id="password" aria-describedby="passwordPrepend" v-model="credentials.pwd" required>
                            </div>
                        </div>
                        <button type="submit" v-on:click.prevent="login" class="btn btn-outline-primary float-right">Log in <i class="fa fa-user"></i></button>
			        </form>
                </div>
                </div>
            </div>
		</div>
	</div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {

      },
    };
  },

};
</script>

<style scoped>

</style>
