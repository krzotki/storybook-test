
import Flex from "../components/Flex";
import Button from "../components/Button";

export default {
    title: 'Components/Flex',
    component: Flex,
    argTypes: {
        numberOfChildren: {type: 'number', defaultValue: 4}
    }
}

const Template = ({numberOfChildren, ...args}) => (
    <Flex {...args} >
        {[...Array(numberOfChildren).keys()].map(item => <Button backgroundColor='green' label={`Button ${item}`} size='md' ></Button>) }
    </Flex>
)

export const Row = Template.bind({});
Row.args = {
    justify: 'center',
    align: 'center',
    direction: 'row',
    wrap: 'wrap',
}
