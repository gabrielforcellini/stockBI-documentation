/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Saiba mais usando a [documentação neste site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Procurar documentos',
    },
    {
      content: 'Tire suas dúvidas sobre a documentação e o projeto',
      title: 'Junte-se à comunidade',
    },
    {
      content: `Descubra o que há de novo [neste projeto.](https://github.com/LuanaNietto/stockbi)`,
      title: 'Mantenha-se atualizado',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Precisa de ajuda?</h1>
          </header>
          <p>Este projeto é mantido por um grupo dedicado de pessoas.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
