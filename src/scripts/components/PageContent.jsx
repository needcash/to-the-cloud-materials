import React from 'react';
import ImageBlock from './ImageBlock';
import AzureImg from '../../images/azure-icon.png';
import PowerpointImg from '../../images/powerpoint-icon.jpg';
import VisualStudioLogo from '../../images/vs-logo.jpg';
import GithubImg from '../../images/github-logo.png';

export default class PageContent extends React.Component {
    render() {
        return <section className="wrap-content row">
            <h2>Materiały dodatkowe</h2>
            <ImageBlock bootstrapClass="col-sm-2" image={AzureImg} backgroundColor="#0071c5" imageLink="https://portal.azure.com" imageInfo="Microsoft Azure Portal" />
            <ImageBlock bootstrapClass="col-sm-2" image={VisualStudioLogo} backgroundColor="#69207a" imageLink="https://www.visualstudio.com/pl/dev-essentials/" imageInfo="Visual Studio Dev Essentials" />
            <ImageBlock bootstrapClass="col-sm-2" image={PowerpointImg} backgroundColor="#ea4e25" imageLink="https://cloud.historykon.pl/index.php/s/y822pdNZtLRViyq" imageInfo="Presentation" />
            <ImageBlock bootstrapClass="col-sm-2" image={AzureImg} backgroundColor="#0071c5" imageLink="https://docs.microsoft.com/en-us/azure/" imageInfo="Microsoft Azure Docs" />
            <ImageBlock bootstrapClass="col-sm-2" image={GithubImg} backgroundColor="white" imageLink="https://github.com/needcash/to-the-cloud-materials" imageInfo="This website code" />
        </section>
    }
}