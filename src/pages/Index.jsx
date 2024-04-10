import React from "react";
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  const metrics = [
    {
      label: "Total Sales",
      value: "$120,500",
      change: "12%",
      changeType: "increase",
      icon: FaChartLine,
    },
    {
      label: "Revenue",
      value: "$98,700",
      change: "8%",
      changeType: "increase",
      icon: FaChartPie,
    },
    {
      label: "Customers",
      value: "1,280",
      change: "5%",
      changeType: "decrease",
      icon: FaUsers,
    },
    {
      label: "Orders",
      value: "4,820",
      change: "20%",
      changeType: "increase",
      icon: FaChartBar,
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {metrics.map((metric, index) => (
          <Stat key={index} borderWidth={1} borderRadius="md" p={4} boxShadow="md">
            <Flex alignItems="center" mb={4}>
              <Box as={metric.icon} size="32px" mr={4} color="blue.500" />
              <StatLabel fontSize="xl">{metric.label}</StatLabel>
            </Flex>
            <StatNumber fontSize="4xl" mb={2}>
              {metric.value}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={metric.changeType === "increase" ? "increase" : "decrease"} />
              {metric.change}
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>

      <Flex mt={12} alignItems="center">
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4}>
            Sales Overview
          </Heading>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxMjc3ODMyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" mb={4} />
          <Text>The sales performance has been strong this quarter, with a steady increase in revenue and total sales. We have seen a 12% growth in sales compared to the previous quarter.</Text>
        </Box>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4}>
            Customer Insights
          </Heading>
          <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGRlbW9ncmFwaGljcyUyMGNoYXJ0fGVufDB8fHx8MTcxMjc3ODMyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer Demographics" mb={4} />
          <Text>Our customer base has slightly decreased by 5% this quarter. We need to focus on customer retention strategies and acquire new customers to maintain growth.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
