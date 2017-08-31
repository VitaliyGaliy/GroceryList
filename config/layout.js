// Default Helmet props
export default Object.freeze({
  htmlAttributes: { lang: 'en' },
  title: 'knows how to study with fun',
  defaultTitle: 'Groceries',
  titleTemplate: 'Groceries',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
    {
      name: 'description',
      content: 'Our goal is to help you study having fun.' +
      ' We respect your desire to gain the power of knowledge and will support you with all our efforts'
    },
    { name: 'keywords', content: 'univerio, univer, fpm, dnu, lessons, schedule, fun, honchar, students, studying' },
  ],
  link: [
    { rel: 'stylesheet', href: '/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  link0ff: [
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
  ],
  script: [
    {
      type: 'text/javascript',
      innerHTML: `{
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-84728275-1', 'auto');
          ga('require', 'linkid');
          ga('send', 'pageview');
      }`,
    },
  ],
  style: [],
})
