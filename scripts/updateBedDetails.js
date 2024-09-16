const axios = require("axios");

const tokens = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NDYsImVtYWlsIjoiYWRtaW5Ac3VucmlzZXNwZWNpYWxpdHkuaW4iLCJpYXQiOjE3MjY0OTMzNDd9.A28UOT1VVy7P78nUKcjkp2sEiiiBlzPeSQ4PeiFNuHE",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NDcsImVtYWlsIjoiY29udGFjdEBncmVlbmZpZWxkbWVkLmNvbSIsImlhdCI6MTcyNjQ5MzM0N30.jk0W1gtA7DfXlbIg7d-_9yX8mzOS_cZYCG7bcNh2n10",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NDgsImVtYWlsIjoiaW5mb0BlbGl0ZWNhcmUuaW4iLCJpYXQiOjE3MjY0OTMzNDh9.ZIpAnOVTorzEfZ_pOrEQ9mZtMzB0FUJeyvL7my7E2lg",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NDksImVtYWlsIjoic3VwcG9ydEBtZWRpY2FyZWhvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.tU3NydWKFTfnmbfP9rzvZXlJEe4S4NjFNZYxLTjWv1E",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTAsImVtYWlsIjoiYWRtaW5AcHJpbWVoZWFsdGguaW4iLCJpYXQiOjE3MjY0OTMzNDh9.W_d_QQmKXWlF5ZeqsOhMMvwp9DpYdFD6jO9KXGOeUks",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTEsImVtYWlsIjoiY29udGFjdEB2aXN0YWhlYWx0aC5jb20iLCJpYXQiOjE3MjY0OTMzNDh9.7hjCIrFGGBYGP0-vj4Of8etqomp3B88ItrCuKVW0y80",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTIsImVtYWlsIjoiaW5mb0BjYXJlcGx1c2hvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.BIO_TPSNij4h7z56JhVPEIpbjjUP2jFZkCa3I22W59s",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTMsImVtYWlsIjoiY29udGFjdEBoZWFsdGhjYXJlaHViLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.xFwmKChyMGPBBCuUpUx8UDyfcmVZU8fwgc_ucgrTBoY",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTQsImVtYWlsIjoiYWRtaW5AY2l0eW1lZGhvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.vU-j7BHVb1OM0arQQnbbH8z_BpXZoGYWbot0Fz9Hb4Y",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTUsImVtYWlsIjoiaW5mb0BhZHZhbmNlZGNhcmUuaW4iLCJpYXQiOjE3MjY0OTMzNDh9.YIVxv9e9ffu0idBRfq-S4X6MprhBuzA-_leg4Gouh-U",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTYsImVtYWlsIjoiYWRtaW5AZ2xvYmFsaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.tSsE_XYWgGz1xb-E7J9oZPV2zrRKFgU_PBqE4gdrYlI",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTcsImVtYWlsIjoiY29udGFjdEB3ZWxsbmVzc2hvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.PX2mAQPXGD8X6GrwezmjTqc0DN0TdEK0TzghQW3N-0w",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTgsImVtYWlsIjoiaW5mb0BtZXRyb2hvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.fFXqjEXn9oetKwov6rS6HAd0uO7a03DRB-iREVVPwCE",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NTksImVtYWlsIjoiYWRtaW5AZWxpdGVtZWRpY2FsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.YxBkBNWalec0wBsaBS26PCPzQN6t9TbCF1G_MovI0ds",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjAsImVtYWlsIjoiY29udGFjdEBoZWFsdGhmaXJzdC5pbiIsImlhdCI6MTcyNjQ5MzM0OH0.p1U4R_9ZJfIxRxwYTQrwyFnNKzjJPb9bCpv9ii2FYpk",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjEsImVtYWlsIjoiYWRtaW5AbmV3bGlmZWhvc3BpdGFsLmluIiwiaWF0IjoxNzI2NDkzMzQ4fQ.ij_bcj5HG-ec77Isxskx_r14xlcLzWy48HQc272jCu0",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjIsImVtYWlsIjoiaW5mb0BicmlnaHRmdXR1cmUuaW4iLCJpYXQiOjE3MjY0OTMzNDl9.HFTmpRsl-Z6DITKgK9vKXjyOW9wVS2diWWwW4HZj-lc",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjMsImVtYWlsIjoiYWRtaW5AY2FyZXdlbGxob3NwaXRhbC5pbiIsImlhdCI6MTcyNjQ5MzM0OX0.tPT6ZHOwkOOiiif9M6TMinanQFk_8yuOKtmESvuUVLo",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjQsImVtYWlsIjoiY29udGFjdEBhc3BpcmVoZWFsdGguaW4iLCJpYXQiOjE3MjY0OTMzNDl9.mJjY_LxhhSGBVQMKi7OGNkkdDmiyCvelPOrRvGwc9Ig",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjUsImVtYWlsIjoiYWRtaW5AZXhjZWxjYXJlLmluIiwiaWF0IjoxNzI2NDkzMzQ5fQ.Kh_lEFuLvxXL9vHYTVPpm2n0CcOPLiXfMHlEUe1JWII",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjYsImVtYWlsIjoiaW5mb0BoZWFsdGhjYXJlY2xpbmljLmluIiwiaWF0IjoxNzI2NDkzMzQ5fQ.72HqTnOFcHdegekploAg0MdiEzpPIXMxgM1VL5wwBhY",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjcsImVtYWlsIjoiY29udGFjdEBicmlnaHRoZWFsdGguaW4iLCJpYXQiOjE3MjY0OTMzNDl9.a1cfcVq_kcXbNUbK_IVRSdS9xJywO5c5m-ls7SFtBgE",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjgsImVtYWlsIjoiYWRtaW5AcGVha2hlYWx0aC5pbiIsImlhdCI6MTcyNjQ5MzM0OX0.wtAQ0jmXeXKY4fBtqKrVXYgEWm7efi2Q2gF1GzRcVrA",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NjksImVtYWlsIjoiY29udGFjdEBoZWFsdGh3YXlob3NwaXRhbC5pbiIsImlhdCI6MTcyNjQ5MzM0OX0.vTnBR08zMrBLyjp3wIpHd120AsPZBYLbtwvjYJqtsBI",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzAsImVtYWlsIjoiaW5mb0Bza3lsaW5laGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzQ5fQ.dLJlOjBD6vg0s7RKR9anqOH5ubXkLlSOvRnr0WEUX7U",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzEsImVtYWlsIjoiYWRtaW5AbmV3ZXJhaG9zcGl0YWwuaW4iLCJpYXQiOjE3MjY0OTMzNDl9.1ZmW0zwrm3CPLKvn81atihN1BdNv-rj-NHmbW5SWMCM",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzIsImVtYWlsIjoiY29udGFjdEBob3BlbWVkaWNhbC5pbiIsImlhdCI6MTcyNjQ5MzM0OX0.RTLzrMFERSeH8B1u3V5WTdJ5OTunEECIhgSm4eTBxyE",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzMsImVtYWlsIjoiYWRtaW5AdXJiYW5oZWFsdGguaW4iLCJpYXQiOjE3MjY0OTMzNDl9.tJ0bH_c5TskFDJecRW9nDnIFWsKNcCmLRTpY7k_cB0c",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzQsImVtYWlsIjoiY29udGFjdEB1cmJhbmNhcmUuaW4iLCJpYXQiOjE3MjY0OTMzNDl9.yOR_g9hOgwqAGywoBAcPq61-ug2FI1nbh12RgWl8slQ",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzUsImVtYWlsIjoiaW5mb0BwcmVtaWVyaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzQ5fQ.cHFdxAhWRf501LFh-etDpr-Ble5IMjPu-p19FV2VD4g",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzYsImVtYWlsIjoiYWRtaW5AemVuaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzQ5fQ.-spZH6rgUVJI4sxJx82aGwifookSzS2EeFeGVhy2N-0",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzcsImVtYWlsIjoiY29udGFjdEBtZXRyb2NhcmUuaW4iLCJpYXQiOjE3MjY0OTMzNDl9.pm8CcCUVwIm-FMoNMj9Orv0O6uCxgnlU1Mu1KT87Tw8",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzgsImVtYWlsIjoiYWRtaW5AYXBleGhlYWx0aC5pbiIsImlhdCI6MTcyNjQ5MzM1MH0.V1wHRe97soYdpxVAcWZLW7BiqttAWTY1DzdIvhb1Aog",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2NzksImVtYWlsIjoiaW5mb0Byb3lhbG1lZGljYWwuaW4iLCJpYXQiOjE3MjY0OTMzNTB9.2O5jXxWlI9qKG205ai0VCGLAdNs_ojTnwMads22pt9Y",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODAsImVtYWlsIjoiYWRtaW5Ac3VtbWl0aGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzUwfQ.7A4O-0P6iVkF6vlK0W1uCiYeX_LqAqK6FOCkldAVwx8",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODEsImVtYWlsIjoiY29udGFjdEBjYXJlbWVkLmluIiwiaWF0IjoxNzI2NDkzMzUwfQ.aJeyBNwRsew9cKWW8wPgqK3HgFVAAvP827eDh165l4E",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODIsImVtYWlsIjoiYWRtaW5AcHJvaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzUwfQ.CIIvotCylRfiUQ0iIs6AfrG3288xTaTQKOTw8HqP7E4",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODMsImVtYWlsIjoiaW5mb0BuZXh0Z2VuaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzUwfQ.VvlrT6hrDha9H52Y4rY9ttimKRAqCN0RzXxpm89Fopc",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODQsImVtYWlsIjoiY29udGFjdEBvcHRpbWFoZWFsdGguaW4iLCJpYXQiOjE3MjY0OTMzNTB9.YZxApUfT7_GztG-langos83W4L31OwphivrDHSjiIOY",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODUsImVtYWlsIjoiYWRtaW5AdmlzaW9uaGVhbHRoLmluIiwiaWF0IjoxNzI2NDkzMzUwfQ.DITosI3JsEUFp6xj2rwEzfi3WOf8SEpx2SyhTA5FSMc",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODYsImVtYWlsIjoiaW5mb0BwaW9uZWVybWVkaWNhbC5pbiIsImlhdCI6MTcyNjQ5MzM1MH0.mqkUUhq3fPqBwuIzRwrPK2TTNXO5gKhE1FzNbJ0WVTk",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODcsImVtYWlsIjoiYWRtaW5AaW5ub3ZhaGMuaW4iLCJpYXQiOjE3MjY0OTMzNTB9.s3lZY2761tLhfKJ8jwh_1k9W7civuP5_eFBXzkFPyyQ",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODgsImVtYWlsIjoiY29udGFjdEBjdXJld2VsbC5pbiIsImlhdCI6MTcyNjQ5MzM1MH0.Tx6KrmDx-XkxsK8hHcWi2eP7DFhlJRDoforPuKhZtZU",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NwaXRhbElkIjo2ODksImVtYWlsIjoiaW5mb0BoZWFsdGh0cnVzdC5pbiIsImlhdCI6MTcyNjQ5MzM1MH0.YZ41zMJSMdKLUSt9SEg9bWGIh4O-vAr4bMcgCqHqeD8",
];

const bedDetails = [{"totalICU":110,"availableICU":6,"totalGeneral":154,"availableGeneral":129,"totalPremium":86,"availablePremium":9},
    {"totalICU":123,"availableICU":86,"totalGeneral":161,"availableGeneral":61,"totalPremium":76,"availablePremium":21},
    {"totalICU":119,"availableICU":38,"totalGeneral":165,"availableGeneral":59,"totalPremium":88,"availablePremium":55},
    {"totalICU":123,"availableICU":80,"totalGeneral":193,"availableGeneral":132,"totalPremium":86,"availablePremium":19},
    {"totalICU":113,"availableICU":85,"totalGeneral":157,"availableGeneral":71,"totalPremium":77,"availablePremium":18},
    {"totalICU":112,"availableICU":3,"totalGeneral":169,"availableGeneral":102,"totalPremium":72,"availablePremium":6},
    {"totalICU":120,"availableICU":94,"totalGeneral":165,"availableGeneral":127,"totalPremium":85,"availablePremium":68},
    {"totalICU":117,"availableICU":108,"totalGeneral":183,"availableGeneral":93,"totalPremium":84,"availablePremium":36},
    {"totalICU":114,"availableICU":33,"totalGeneral":194,"availableGeneral":104,"totalPremium":90,"availablePremium":37},
    {"totalICU":116,"availableICU":71,"totalGeneral":166,"availableGeneral":133,"totalPremium":79,"availablePremium":35},
    {"totalICU":125,"availableICU":56,"totalGeneral":200,"availableGeneral":139,"totalPremium":75,"availablePremium":13},
    {"totalICU":121,"availableICU":63,"totalGeneral":172,"availableGeneral":2,"totalPremium":78,"availablePremium":26},
    {"totalICU":116,"availableICU":71,"totalGeneral":178,"availableGeneral":34,"totalPremium":85,"availablePremium":17},
    {"totalICU":118,"availableICU":99,"totalGeneral":166,"availableGeneral":131,"totalPremium":79,"availablePremium":17},
    {"totalICU":120,"availableICU":53,"totalGeneral":154,"availableGeneral":86,"totalPremium":80,"availablePremium":32},
    {"totalICU":119,"availableICU":6,"totalGeneral":172,"availableGeneral":87,"totalPremium":79,"availablePremium":27},
    {"totalICU":119,"availableICU":9,"totalGeneral":174,"availableGeneral":59,"totalPremium":84,"availablePremium":65},
    {"totalICU":116,"availableICU":13,"totalGeneral":195,"availableGeneral":96,"totalPremium":73,"availablePremium":42},
    {"totalICU":121,"availableICU":49,"totalGeneral":198,"availableGeneral":100,"totalPremium":86,"availablePremium":7},
    {"totalICU":113,"availableICU":46,"totalGeneral":187,"availableGeneral":127,"totalPremium":86,"availablePremium":47},
    {"totalICU":110,"availableICU":94,"totalGeneral":188,"availableGeneral":12,"totalPremium":75,"availablePremium":23},
    {"totalICU":118,"availableICU":96,"totalGeneral":158,"availableGeneral":98,"totalPremium":81,"availablePremium":49},
    {"totalICU":119,"availableICU":14,"totalGeneral":152,"availableGeneral":144,"totalPremium":88,"availablePremium":1},
    {"totalICU":121,"availableICU":58,"totalGeneral":163,"availableGeneral":8,"totalPremium":77,"availablePremium":50},
    {"totalICU":123,"availableICU":45,"totalGeneral":189,"availableGeneral":87,"totalPremium":79,"availablePremium":36},
    {"totalICU":119,"availableICU":16,"totalGeneral":184,"availableGeneral":38,"totalPremium":71,"availablePremium":60},
    {"totalICU":117,"availableICU":61,"totalGeneral":172,"availableGeneral":55,"totalPremium":74,"availablePremium":49},
    {"totalICU":119,"availableICU":13,"totalGeneral":192,"availableGeneral":15,"totalPremium":70,"availablePremium":6},
    {"totalICU":118,"availableICU":77,"totalGeneral":187,"availableGeneral":47,"totalPremium":86,"availablePremium":39},
    {"totalICU":117,"availableICU":24,"totalGeneral":172,"availableGeneral":63,"totalPremium":75,"availablePremium":9},
    {"totalICU":125,"availableICU":68,"totalGeneral":189,"availableGeneral":95,"totalPremium":82,"availablePremium":57},
    {"totalICU":125,"availableICU":33,"totalGeneral":153,"availableGeneral":145,"totalPremium":77,"availablePremium":7},
    {"totalICU":113,"availableICU":27,"totalGeneral":165,"availableGeneral":59,"totalPremium":72,"availablePremium":5},
    {"totalICU":113,"availableICU":95,"totalGeneral":188,"availableGeneral":129,"totalPremium":73,"availablePremium":3},
    {"totalICU":120,"availableICU":19,"totalGeneral":176,"availableGeneral":13,"totalPremium":85,"availablePremium":62},
    {"totalICU":117,"availableICU":38,"totalGeneral":176,"availableGeneral":93,"totalPremium":89,"availablePremium":47},
    {"totalICU":120,"availableICU":13,"totalGeneral":158,"availableGeneral":142,"totalPremium":88,"availablePremium":23},
    {"totalICU":116,"availableICU":75,"totalGeneral":200,"availableGeneral":143,"totalPremium":76,"availablePremium":58},
    {"totalICU":123,"availableICU":91,"totalGeneral":192,"availableGeneral":43,"totalPremium":71,"availablePremium":21},
    {"totalICU":117,"availableICU":95,"totalGeneral":166,"availableGeneral":41,"totalPremium":78,"availablePremium":54},
    {"totalICU":118,"availableICU":48,"totalGeneral":164,"availableGeneral":92,"totalPremium":90,"availablePremium":62},
    {"totalICU":116,"availableICU":61,"totalGeneral":194,"availableGeneral":61,"totalPremium":88,"availablePremium":45},
    {"totalICU":124,"availableICU":17,"totalGeneral":187,"availableGeneral":53,"totalPremium":88,"availablePremium":38},
    {"totalICU":111,"availableICU":77,"totalGeneral":184,"availableGeneral":83,"totalPremium":71,"availablePremium":28}]


const url = "http://localhost:3000/api/v1/hospital/update-bed-details"; // Replace with your API endpoint

const sendRequests = async () => {
    console.log("Script running");
  
    for (let i = 0; i < bedDetails.length; i++) { // Adjusted loop condition for length of bedDetails
      try {
        const token = tokens[i]; // Use modulo for token cycling
        const postToken = `Bearer ${token}`;
  
        const response = await axios.post(url, bedDetails[i], {
          headers: {
            'Authorization': postToken,
            'Content-Type': 'application/json'
          }
        });
  
        console.log(response.data);
  
        if (response.data.token) {
          tokens.push(response.data.token);
        }
      } catch (error) {
        console.error(
          `Error sending request for index ${i}:`,
          error.response?.data || error.message
        );
      }
    }
}

sendRequests();
