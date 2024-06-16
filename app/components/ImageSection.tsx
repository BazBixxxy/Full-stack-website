import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="p-8 lg:hidden">
      <div className="relative">
        <Image
          width={2250}
          height={1390}
          // src="https://lh3.googleusercontent.com/pw/AP1GczPTJrjZq5BK0qxcAb9jjq8uYdFMVNuZ9cWX8i63B4gG9W3REQPX8NwhAeljD7xEtAOUtwAfdJiTwZts8hjIsDLij5gDNT2JFtNNam5AHMXC6iXnMOu4inD3yiopRTcWTYjaXB_VaA-2p88q6VwgQ_gE5kS2bufclXsX8GmC7YaLbPjKyM9fbpZWthVOi4Cc8fkH2Tl5G5a5RuBspjCb-ikWEP7IFSxvpvd5qV-fKGZD_ZDDiK0S5BT337fHXBmeP8-bAiAiU3zcUJgXEya_xvoI6tmAGPv4xtzrGFdncHo85_xNegEKikrCpGCVdOSrOd4Q05K0MRe57qQoN_aLYB6zZav85IHuRJJvGIMTlaXxz5A5zlFxa8zXIg2pZArrpGsZd16Jr7thsobfcDGTP_n9GoRvdXg2YngFA70RPDhPIvtz4KeHzeVqy1R9rYaL9j-p7KcYlcILfBwlkZmFBX-X6Wsg0yOfADzzNnjyd3_wNPlMEIIodawMohqO_rI6gveOs2lpVnJPN0eB74X5rBWWk0SWCoqBj4MSC9YECcXdVkAtdN3-f_-HWIOCOobOgfFNqGCHe6PfY6wYg3k26k6qexlAoyr0zh8hELIs3hSTNxzkbr5yIcjDw_4qL3fVCol1rpXyzChh3RaUzqZ4H0r-Waec7UXqYQTDIhf0UHpv-1oamOSLpT8sT620eOL71hAba4zPuERNjqWbyEZLvvOVEYLBPZiNpXA3Y7lpayYT08thgYPEwL5w6NCliku2A2o5Nt9nT5UseoN99wUXvABfmZO6gCBG7ZjEDvCR0mJ-c8M-ndnZ6WOKm7hQkDUtPp5_bjcFpsRnQwIn2KmarK5Zd8ADrhIlVuU3axogL9_PxMdNhlA80qR2alCvS5eRdTjQMt0my14lkX4QC6JFA6_G=w1440-h1440-s-no?authuser=0"
          src="https://github.com/BazBixxxy/weather-app/blob/main/src/images/vr.png?raw=true"
          alt=""
          className="w-11/12 z-20"
        />
        <div className="p-3 rounded-md bg-gradient-to-tl to-purple-600 from-orange-500 text-white absolute top-5 right-5 z-10">
          Dream Beyond
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
