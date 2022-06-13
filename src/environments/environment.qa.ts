// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//5zayfg4o3ukncki4jsr3sahxe7e5syswiooqirzxtr4whktpkkxa
export const environment = {
  production: true,
  showLog: false,
  permissionHandling: true,

  baseApiUrl: 'http://10.101.26.213/seda-platform/api/',
  hubConnection: 'http://10.101.26.213/seda-platform/',

  // build command :"ng build --configuration=qa --base-href /btfqaportal/",

  webAppUrl: '',
  device: 'web',
  accessPoint: 'Portal',
  grant_type: 'password',
  client_id: 'ro.web.client',
  // client_secret: 'secret',
  client_secret: '17ef0943-2cbc-4d97-96b3-3eb4adb50f0f',
  scope: 'API'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
