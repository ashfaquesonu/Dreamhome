import Replicate from 'replicate';
import fetch from 'node-fetch';

export const aiRoute = async(req,res)=>{
  //   console.log(req.body)
  const image = req.body.image;
  const theme = req.body.selectedModel;
  const room = req.body.room;
  console.log(image,theme,room)         

  // 2. Initialize the replicate object with our Replicate API token
  const replicate = new Replicate({
    auth: 'r8_cLiMxXCfA9P6emftyKott0VG3GCDKDO23CMTb',
    fetch:fetch
  });

  const output = await replicate.run(
    "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
    {
      input: {
        eta: 0,
        image: "https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png",
        scale: 9,
        prompt: `a cheerful ${theme} ${room}`,
        a_prompt: "best quality, extremely detailed",
        n_prompt: "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
        ddim_steps: 20,
        num_samples: "1",
        value_threshold: 0.1,
        image_resolution: "512",
        detect_resolution: 512,
        distance_threshold: 0.1
      }
    }
  );
  if (!output) {
    console.log('Something went wrong');
   res.status(404).json({message:"not image is generated"})
    
  }
  // 7. Otherwise, we show output in the console (server-side)
  //  and return the output back to the client
  console.log('Output', output);
  res.status(200).json(output[1])
}